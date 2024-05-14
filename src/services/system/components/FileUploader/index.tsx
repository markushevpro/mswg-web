import type { PropsWithChildren } from 'react'
import type { UploaderProps }     from 'rsuite/esm/Uploader'

import { Button, Loader, Uploader } from 'rsuite'

interface IFileUploaderProps extends PropsWithChildren {
    className?: string
    loading?: boolean
    onUpload: UploaderProps['onUpload']
}

export
function FileUploader
({ children, loading, className, onUpload }: IFileUploaderProps )
{
    return (
        <Uploader
            draggable
            action=""
            className={className}
            fileListVisible={false}
            listType="picture"
            onUpload={onUpload}
        >
            <Button>
                {
                    loading
                        ? <Loader />
                        : children
 }
            </Button>
        </Uploader>
    )
}
