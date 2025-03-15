import styles from './image-preview.module.css'

interface PImagePreview
{
    src: string
}

export
function ImagePreview
({ src }: PImagePreview )
{
    return (
        <div className={styles.container}>
            {
                src && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img alt="" src={src} />
                )
            }
        </div>
    )
}
