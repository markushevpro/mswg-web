import { IScreen } from '@/services/screens'

export const fixScreenOffset = ( screen: IScreen, offsetX: number, offsetY: number ): IScreen => {
    return {
        devicePixelRatio: screen.devicePixelRatio,
        width:            screen.width,
        height:           screen.height,
        label:            screen.label,
        left:             screen.left * screen.devicePixelRatio - offsetX,
        top:              fixedTop( screen, offsetY ) - offsetY
    }
}

export const fixScreenOffsetMap = ( offsetX: number, offsetY: number ) => ( screen: IScreen ) => fixScreenOffset( screen, offsetX, offsetY )

export const ratioFix = ( number: number, pixelRatio: number ) => {
    return number - ( number * pixelRatio )
}

export const fixedTop = ( screen: IScreen, min: number ) => screen.top === min ? screen.top : screen.top + ratioFix( screen.height, screen.devicePixelRatio )
export const fixedLeft = ( screen: IScreen, min: number ) => screen.left === min ? screen.left : screen.left + ratioFix( screen.left, screen.devicePixelRatio )
