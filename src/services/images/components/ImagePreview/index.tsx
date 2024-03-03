import styles from './image-preview.module.css'

interface IImagePreviewProps {
    src: string
}

export default function ImagePreview ({ src }: IImagePreviewProps ) {
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
