import { Close, FileUpload, Reload } from '@rsuite/icons'
import { useEffect, useState }       from 'react'
import { IconButton }                from 'rsuite'
import { FileType }                  from 'rsuite/esm/Uploader'

import { FileUploader } from '@/services/system'
import Center           from '@/shared/components/Center'
import FloatingButtons  from '@/shared/components/FloatingButtons'

import { TImageData } from '../../types'
import ImagePreview   from '../ImagePreview'

import { previewFile } from './helpers'
import styles          from './image-uploader.module.css'

interface IImageUploaderProps {
    data?: TImageData
    onChange: ( value: TImageData ) => void
}

export default function ImageUploader ({ data, onChange }: IImageUploaderProps ) {
    const [ uploading, $uploading ] = useState<boolean>( false )

    const handleRemove = () => {
        onChange( null )
    }

    const handleUpload = ( file: FileType ) => {
        if ( file.blobFile ) {
            $uploading( true )
            previewFile( file.blobFile, value => onChange( value ))
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
