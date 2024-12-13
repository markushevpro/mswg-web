import type { ScreensLayout, Screen, SystemScreensState } from '@/services/screens'
import type { WindowSize }                                from '@/services/system'

function fixScreenOffset
( screen: Screen, offsetX: number, offsetY: number ): Screen
{
    return {
        devicePixelRatio: screen.devicePixelRatio,
        width:            screen.width,
        height:           screen.height,
        label:            screen.label,
        left:             screen.left * screen.devicePixelRatio - offsetX,
        top:              fixedTop( screen, offsetY ) - offsetY
    }
}

function ratioFix
( number: number, pixelRatio: number ): number
{
    return number - ( number * pixelRatio )
}

export
function fixScreenOffsetMap
( offsetX: number, offsetY: number ): ( screen: Screen ) => Screen
{
    return ( screen: Screen ) => fixScreenOffset( screen, offsetX, offsetY )
}

function fixedTop
( screen: Screen, min: number ): number
{
    return screen.top === min ? screen.top : screen.top + ratioFix( screen.height, screen.devicePixelRatio )
}

function fixedLeft
( screen: Screen, min: number ): number
{
    return screen.left === min ? screen.left : screen.left + ratioFix( screen.left, screen.devicePixelRatio )
}

// TODO: Refactor for readability
export
function calculateScreensLayout
( screens: Screen[], size: WindowSize ): ScreensLayout
{
    const _left = screens.reduce(( left, screen ) => Math.min( left, screen.left ), Infinity )
    const _top  = screens.reduce(( top, screen ) => Math.min( top, screen.top ), Infinity )

    const left = screens.reduce(( left, screen ) => Math.min( left, fixedLeft( screen, _left ) * screen.devicePixelRatio ), Infinity )
    const top  = screens.reduce(( top, screen ) => Math.min( top, fixedTop( screen, _top ) * screen.devicePixelRatio ), Infinity )

    const width = screens
        .sort(( a, b ) => fixedLeft( a, left ) * a.devicePixelRatio - fixedLeft( b, left ) * b.devicePixelRatio )
        .map( screen => fixedLeft( screen, left ) * screen.devicePixelRatio - left + screen.width * screen.devicePixelRatio )
        .reduce(( max, offset ) => Math.max( offset, max ), left )

    const height = screens
        .sort(( a, b ) => fixedTop( a, top ) * a.devicePixelRatio - fixedTop( b, top ) * b.devicePixelRatio )
        .map( screen => fixedTop( screen, top ) * screen.devicePixelRatio - top + screen.height * screen.devicePixelRatio )
        .reduce(( max, offset ) => Math.max( offset, max ), top )

    const zoom = Math.max( Math.ceil( 1 / ( size.width / width )), Math.ceil( 1 / ( size.height / height )))

    return {
        left,
        top,
        width,
        height,
        zoom
    }
}

export
async function getSystemScreens
(): Promise<SystemScreensState>
{
    console.log( 'Fetching screens...' )

    try {
        const data = await window.getScreenDetails?.()
        const res  = data?.screens

        if ( res ) {
            console.log( 'Screens ok', res )

            return {
                loading: false,
                error:   false,
                denied:  false,
                screens: res
            }
        } else {
            console.log( 'Screens not fetched' )

            return {
                loading: false,
                error:   true,
                denied:  false,
                screens: undefined
            }
        }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch ( e: any ) {
        console.log( 'error', { e })

        if ( e.message.includes( 'Permission denied' )) {
            console.log( 'Permission denied' )

            return {
                loading: false,
                error:   true,
                denied:  true,
                screens: undefined
            }
        } else {
            console.log( 'Unkown error' )

            return {
                loading: false,
                error:   true,
                denied:  false,
                screens: undefined
            }
        }
    }
}
