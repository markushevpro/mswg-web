import type { TImageData }    from '@/services/images'
import type { IScreen }       from '@/services/screens'
import type { CSSProperties } from 'react'

import { useEffect, useState } from 'react'

import { ImageUploader } from '@/services/images'

import styles from './screen.module.css'

interface IScreenProps
{
    config: IScreen
    zoom: number
    image?: TImageData
    onImage: ( value: TImageData ) => void
    offset?: number
}

export
function Screen
({ config, zoom, image, offset = 0, onImage }: IScreenProps )
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
