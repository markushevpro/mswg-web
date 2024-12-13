import type { TImageData } from '@/services/images'

export
function previewFile
( file: File, callback: ( value: TImageData ) => void ): void
{
    const reader = new FileReader()

    reader.onloadend = () => {
        callback( reader.result )
    }

    reader.readAsDataURL( file )
}
