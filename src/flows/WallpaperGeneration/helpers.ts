import { IScreen, IScreensLayout } from '@/services/screens'

export const getImageSize = ( img: HTMLImageElement ) => ({
    sx: 0,
    sy: 0,
    sw: img.width,
    sh: img.height
})

export const getScreenSize = ( screen: IScreen ) => ({
    dx: screen.left,
    dy: screen.top,
    dw: screen.width * screen.devicePixelRatio,
    dh: screen.height * screen.devicePixelRatio
})

export const calculateCrop = ( screen: IScreen, img: HTMLImageElement ) => {
    let { sx, sy, sw, sh } = getImageSize( img )
    const { dx, dy, dw, dh } = getScreenSize( screen )

    const targetAspect = dw / dh
    const currentAspect = img.width / img.height

    if ( targetAspect < currentAspect ) {
        // portrait
        const realWidth = img.height * targetAspect
        const offset = ( img.width - realWidth ) / 2
        sx = offset
        sw = realWidth
    } else {
        const realHeight = img.width / targetAspect
        const offset = ( img.height - realHeight ) / 2
        sy = offset
        sh = realHeight
    }

    return {
        sx,
        sy,
        sw,
        sh,
        dx,
        dy,
        dw,
        dh
    }
}

export const drawImage = ( ctx: CanvasRenderingContext2D, screen: IScreen, image: string ) => new Promise<void>(( resolve ) => {
    const img = new Image()

    img.addEventListener( 'load', () => {
        const { sx, sy, sw, sh, dx, dy, dw, dh } = calculateCrop( screen, img )

        ctx.drawImage( img, sx, sy, sw, sh, dx, dy, dw, dh )
        resolve()
    })

    img.src = image
})

export const clearScreen = ( ctx: CanvasRenderingContext2D, layout: IScreensLayout, color: string ) => {
    ctx.rect( 0, 0, layout.width, layout.height )
    ctx.fill()
}
