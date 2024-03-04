import Screen from '@/shared/components/Screen'

import { EDITOR_PADDING } from './consts'

import type { TImageData, TImages } from '@/services/images'
import type { IScreen }             from '@/services/screens'
import type { ReactNode }           from 'react'

interface IScreensScreenProps {
    ready?: boolean
    zoom: number
    screens?: IScreen[]
    images?: TImages
    updateImage: ( label: string ) => ( image: TImageData ) => void
}

export default function ScreensScreen
({ ready, zoom, screens, images, updateImage }: IScreensScreenProps ): ReactNode
{
    if ( !ready ) {
        return 'Calculating sizes...'
    }

    if ( !screens ) {
        return null
    }

    return screens.map(( screen: IScreen ) => (
        <Screen
            key={screen.label}
            config={screen}
            image={images?.[ screen.label ]}
            offset={EDITOR_PADDING}
            zoom={zoom}
            onImage={updateImage( screen.label )}
        />
    ))
}
