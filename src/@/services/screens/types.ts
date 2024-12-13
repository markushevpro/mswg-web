declare global {
    interface Window {
        getScreenDetails?: () => Promise<{ screens: Screen[] }>
    }
}

export
interface SystemScreensState
{
    loading: boolean
    error: boolean
    denied: boolean
    screens: Screen[] | undefined
}

export
interface ScreenOrientation
{
    angle: number
    type: string
    onchange: never
}

export
interface Screen
{
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
    orientation?: ScreenOrientation
    pixelDepth?: number
    top: number
    width: number
}

export
interface ScreensLayout
{
    left: number
    top: number
    width: number
    height: number
    zoom: number
}
