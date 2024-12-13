import type { TImageData } from '@/services/images'
import type { FileType }   from 'rsuite/esm/Uploader'

import { useState, useEffect, useCallback } from 'react'

import { useHookResult } from '@/shared/hooks/useHookResult'

import { previewFile } from './helpers'

interface HImageUploader
{
    uploading: boolean
    upload: ( file: FileType ) => void
    remove: () => void
}

export
function useImageUploader
( data: TImageData | undefined, onChange: ( value: TImageData ) => void ): HImageUploader
{
    const [ uploading, $uploading ] = useState<boolean>( false )

    const remove = useCallback(
        (): void => {
            onChange( null )
        },
        [ onChange ]
    )

    const upload = useCallback(
        ( file: FileType ): void => {
            if ( file.blobFile ) {
                $uploading( true )
                previewFile( file.blobFile, value => { onChange( value ) })
            }
        },
        [ onChange ]
    )

    useEffect(() => {
        if ( data ) {
            $uploading( false )
        }
    }, [ data ])

    return useHookResult({
        uploading,
        upload,
        remove
    })
}
