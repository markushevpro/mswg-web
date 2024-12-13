import type { FileType } from 'rsuite/esm/Uploader'

import { Reload, Close } from '@rsuite/icons'
import { IconButton }    from 'rsuite'

import { FileUploader }    from '@/shared/ui-kit/FileUploader'
import { FloatingButtons } from '@/shared/ui-kit/FloatingButtons'

import styles from './image-uploader-controls.module.css'

interface PImageUploaderControls
{
    uploading: boolean
    upload: ( file: FileType ) => void
    remove: () => void
}

export
function ImageUploaderControls
({ uploading, upload, remove }: PImageUploaderControls )
{
    return (
        <FloatingButtons>
            <FileUploader className={styles.controls} loading={uploading} onUpload={upload}>
                <Reload />
            </FileUploader>

            <IconButton icon={<Close />} onClick={remove} />
        </FloatingButtons>
    )
}
