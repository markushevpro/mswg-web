import styles from './image-preview.module.css'

import type { ReactNode } from 'react'

interface IImagePreviewProps {
    src: string
}

export default function ImagePreview
({ src }: IImagePreviewProps ): ReactNode
{
    return (
        <div className={styles.container}>
            {
                src && (
                    <img alt="" src={src} />
                )
            }
        </div>
    )
}
