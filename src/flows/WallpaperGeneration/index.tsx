import { Close }                       from '@rsuite/icons'
import { useEffect, useRef, useState } from 'react'
import { IconButton, Loader }          from 'rsuite'

import LoadingScreen               from '@/screens/Loading'
import { TImages }                 from '@/services/images'
import { IScreensLayout, IScreen } from '@/services/screens'
import { downloadFile }            from '@/services/system'
import BottomButton                from '@/shared/components/BottomButton'
import Center                      from '@/shared/components/Center'
import FloatingButtons             from '@/shared/components/FloatingButtons'

import styles                     from './generation-flow.module.css'
import { clearScreen, drawImage } from './helpers'

interface IWallperpGenerationFlowProps {
    layout: IScreensLayout
    screens?: IScreen[]
    images: TImages
    onClose: () => void
}

export default function WallperpGenerationFlow ({ layout, screens, images, onClose }: IWallperpGenerationFlowProps ) {
    const [ download, $download ] = useState<boolean>( false )
    const [ ready, $ready ] = useState<boolean>( false )
    const [ done, $done ] = useState<boolean>( false )

    const ref = useRef<HTMLCanvasElement>( null )

    const redraw = async () => {
        if ( ready && ref.current ) {
            $done( false )

            const ctx = ref.current.getContext( '2d' )

            if ( ctx ) {
                clearScreen( ctx, layout, '#000000' )

                for ( let i = 0; i < ( screens?.length ?? 0 ); i++ ) {
                    let screen = screens?.[ i ]
                    if ( screen && images[ screen.label ]) {
                        await drawImage( ctx, screen, images[ screen.label ] as string )
                    }
                }

                $done( true )
            }
        }
    }

    const handleDownload = () => {
        if ( ref.current ) {
            $download( true )
            setTimeout(() => ref.current && downloadFile( ref.current.toDataURL(), 'mswg-wallpaper.png' ), 0 )
            setTimeout(() => $download( false ), 1000 )
        }
    }

    useEffect(() => {
        if ( layout && screens && images ) {
            $ready( true )
        }
    }, [ layout, screens, images ])

    useEffect(() => {
        redraw()
    }, [ ready, ref ])

    return (
        <Center>
            {
                ready && (
                    <canvas
                        ref={ref}
                        className={styles.canvas}
                        height={layout.height}
                        width={layout.width}
                        onClick={redraw}
                    />
                )
            }

            {
                !done && (
                    <LoadingScreen className={styles.overlay} />
                )
            }

            {
                done && (
                    <>
                        <BottomButton onClick={handleDownload}>
                            {
                                download
                                    ? <Loader />
                                    : 'Download'
                            }
                        </BottomButton>

                        <FloatingButtons>
                            <IconButton icon={<Close />} onClick={onClose} />
                        </FloatingButtons>
                    </>
                )
            }
        </Center>
    )
}
