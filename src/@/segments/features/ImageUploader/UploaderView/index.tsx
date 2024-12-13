import type { FileType } from 'rsuite/esm/Uploader'

import { FileUpload } from '@rsuite/icons'

import { FileUploader } from '@/shared/ui-kit/FileUploader'

interface PUploaderView
{
    uploading: boolean
    upload: ( file: FileType ) => void
}

export
function UploaderView
({ uploading, upload }: PUploaderView )
{
    return (
        <FileUploader loading={uploading} onUpload={upload}>
            <FileUpload />
        </FileUploader>
    )
}
