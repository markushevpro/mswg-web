import { TImageData } from '../../types'

export const previewFile = ( file: File, callback: ( value: TImageData ) => void ) => {
    const reader = new FileReader()
    reader.onloadend = () => {
        callback( reader.result )
    }
    reader.readAsDataURL( file )
}
