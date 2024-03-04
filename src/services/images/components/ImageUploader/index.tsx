import { Close, FileUpload, Reload } from '@rsuite/icons'
import { useEffect, useState }       from 'react'
import { IconButton }                from 'rsuite'

import ImagePreview     from '@/services/images/components/ImagePreview'
import { FileUploader } from '@/services/system'
import Center           from '@/shared/components/Center'
import FloatingButtons  from '@/shared/components/FloatingButtons'

import { previewFile } from './helpers'
import styles          from './image-uploader.module.css'

import type { TImageData } from '@/services/images/types'
import type { ReactNode }  from 'react'
import type { FileType }   from 'rsuite/esm/Uploader'

interface IImageUploaderProps {
    data?: TImageData
    onChange: ( value: TImageData ) => void
}

export default function ImageUploader
({ data, onChange }: IImageUploaderProps ): ReactNode
{
    const [ uploading, $uploading ] = useState<boolean>( false )

    const handleRemove = (): void => {
        onChange( null )
    }

    const handleUpload = ( file: FileType ): void => {
        if ( file.blobFile ) {
            $uploading( true )
            previewFile( file.blobFile, value => { onChange( value ) })
        }
    }

    useEffect(() => {
        if ( data ) {
            $uploading( false )
        }
    }, [ data ])

    return (
        <div className={styles.container}>
            <Center>
                {
                    data
                        ? (
                            // TODO: Refactor
                            <>
                                <FloatingButtons>
                                    <FileUploader className={styles.small} loading={uploading} onUpload={handleUpload}>
                                        <Reload />
                                    </FileUploader>

                                    <IconButton icon={<Close />} onClick={handleRemove} />
                                </FloatingButtons>

                                <ImagePreview src={data as string} />
                            </>
                        )
                        : (
                            <FileUploader loading={uploading} onUpload={handleUpload}>
                                <FileUpload />
                            </FileUploader>
                        )
                }
            </Center>
        </div>
    )
}
