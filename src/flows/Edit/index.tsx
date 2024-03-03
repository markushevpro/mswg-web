'use client'

import { CSSProperties, useEffect, useState } from 'react'
import { useWindowSize }                      from 'usehooks-ts'

import GenerateFlow                from '@/flows/Generate'
import ScreensScreen               from '@/screens/Screens'
import { TImages, TImageData }     from '@/services/images'
import { IScreen, IScreensLayout } from '@/services/screens'
import { IWindowSize }             from '@/services/system'
import Container                   from '@/shared/components/Container'
import { useToggleState }          from '@/shared/lib/hooks/useToggleState'

import { calculateScreensLayout } from './calc'
import { fixScreenOffsetMap  }    from './helpers'

export interface IEditorProps {
    screens?: IScreen[]
}

export default function EditFlow ({ screens }: IEditorProps ) {
    const size = useWindowSize()

    const [ generation,, runGeneration, stopGeneration ] = useToggleState( false )

    const [ layout, $layout ] = useState<IScreensLayout>()
    const [ configs, $configs ] = useState<IScreen[] | undefined>( screens )
    const [ images, $images ] = useState<TImages>({})
    const [ style, $style ] = useState<CSSProperties>()

    const updateConfigs = ( screens: IScreen[], size: IWindowSize ) => {
        const data = calculateScreensLayout( screens, size )

        $layout( data )

        $style({
            width:  data.width / data.zoom,
            height: data.height / data.zoom
        })

        $configs( screens.map( fixScreenOffsetMap( data.left, data.top )))
    }

    const updateImage = ( label: string ) => ( image: TImageData ) => {
        const updated = { ...images }
        updated[ label ] = image
        $images( updated )
    }

    useEffect(() => {
        if ( screens ) {
            updateConfigs( screens, size )
        }
    }, [ screens, size ])

    return (
        <Container style={style}>
            <ScreensScreen
                images={images}
                ready={!!layout}
                screens={configs}
                updateImage={updateImage}
                zoom={layout?.zoom ?? 1}
            />

            {
                ( layout && configs ) && (
                    <GenerateFlow
                        active={generation}
                        configs={configs}
                        images={images}
                        layout={layout}
                        onFinish={stopGeneration}
                        onStart={runGeneration}
                    />
                )
            }
        </Container>
    )
}
