import type { IScreen } from '@/services/screens'

function fixScreenOffset
( screen: IScreen, offsetX: number, offsetY: number ): IScreen
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

export function fixScreenOffsetMap
( offsetX: number, offsetY: number ): ( screen: IScreen ) => IScreen
{
    return ( screen: IScreen ) => fixScreenOffset( screen, offsetX, offsetY )
}

export function fixedTop
( screen: IScreen, min: number ): number
{
    return screen.top === min ? screen.top : screen.top + ratioFix( screen.height, screen.devicePixelRatio )
}

export function fixedLeft
( screen: IScreen, min: number ): number
{
    return screen.left === min ? screen.left : screen.left + ratioFix( screen.left, screen.devicePixelRatio )
}
