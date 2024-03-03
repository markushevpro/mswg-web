import { PropsWithChildren }        from 'react'
import { Button, Loader, Uploader } from 'rsuite'
import { UploaderProps }            from 'rsuite/esm/Uploader'

interface IFileUploaderProps extends PropsWithChildren {
    className?: string
    loading?: boolean
    onUpload: UploaderProps['onUpload']
}

export default function FileUploader ({ children, loading, className, onUpload }: IFileUploaderProps ) {
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
