import { CSSProperties, useEffect, useState } from 'react'

import { TImageData, ImageUploader } from '@/services/images'
import { IScreen }                   from '@/services/screens'

import styles from './screen.module.css'

interface IScreenProps {
    config: IScreen
    zoom: number
    image?: TImageData
    onImage: ( value: TImageData ) => void
    offset?: number
}

export default function Screen ({ config, zoom, image, offset = 0, onImage }: IScreenProps ) {
    const [ style, $style ] = useState<CSSProperties>()

    useEffect(() => {
        $style({
            left:   config.left / zoom + offset,
            top:    config.top / zoom + offset,
            width:  ( config.width * config.devicePixelRatio ) / zoom,
            height: ( config.height * config.devicePixelRatio ) / zoom
        })
    }, [ config, zoom ])

    return (
        <div className={styles.screen} style={style}>
            <ImageUploader data={image} onChange={onImage} />
        </div>
    )
}
