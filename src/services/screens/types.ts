export interface IScreenOrientation {
    angle: number
    type: string
    onchange: never
}

export interface IScreen {
    availHeight?: number
    availLeft?: number
    availTop?: number
    availWidth?: number
    colorDepth?: number
    devicePixelRatio: number
    height: number
    isExtended?: boolean
    isInternal?: boolean
    isPrimary?: boolean
    label: string
    left: number
    onchange?: never
    orientation?: IScreenOrientation
    pixelDepth?: number
    top: number
    width: number
}

export interface IScreensLayout {
    left: number
    top: number
    width: number
    height: number,
    zoom: number
}
