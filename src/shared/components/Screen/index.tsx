import { useEffect, useState } from 'react'

import { ImageUploader } from '@/services/images'

import styles from './screen.module.css'

import type { TImageData }               from '@/services/images'
import type { IScreen }                  from '@/services/screens'
import type { CSSProperties, ReactNode } from 'react'

interface IScreenProps {
    config: IScreen
    zoom: number
    image?: TImageData
    onImage: ( value: TImageData ) => void
    offset?: number
}

export default function Screen
({ config, zoom, image, offset = 0, onImage }: IScreenProps ): ReactNode
{
    const [ style, $style ] = useState<CSSProperties>()

    useEffect(() => {
        $style({
            left:   config.left / zoom + offset,
            top:    config.top / zoom + offset,
            width:  ( config.width * config.devicePixelRatio ) / zoom,
            height: ( config.height * config.devicePixelRatio ) / zoom
        })
    }, [ config, zoom, offset ])

    return (
        <div className={styles.screen} style={style}>
            <ImageUploader data={image} onChange={onImage} />
        </div>
    )
}
