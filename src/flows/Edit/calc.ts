import type { IScreen, IScreensLayout } from '@/services/screens'
import type { IWindowSize }             from '@/services/system'

import { fixedLeft, fixedTop } from './helpers'

// TODO: Refactor for readability
export const calculateScreensLayout = ( screens: IScreen[], size: IWindowSize ): IScreensLayout => {
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
