import WallperpGenerationFlow      from '@/flows/WallpaperGeneration'
import { TImages }                 from '@/services/images'
import { IScreen, IScreensLayout } from '@/services/screens'
import BottomButton                from '@/shared/components/BottomButton'
import Container                   from '@/shared/components/Container'

import styles from './generate-flow.module.css'

interface IGenerateFlowProps {
    active: boolean
    layout: IScreensLayout
    configs: IScreen[]
    images: TImages
    onStart: () => void
    onFinish: () => void
}

export default function GenerateFlow ({ active, layout, configs, images, onStart, onFinish }: IGenerateFlowProps ) {
    if ( !active ) {
        return (
            <BottomButton onClick={onStart}>
                Generate
            </BottomButton>
        )
    }

    return (
        <Container className={styles.overlay}>
            <WallperpGenerationFlow
                images={images}
                layout={layout}
                screens={configs}
                onClose={onFinish}
            />
        </Container>
    )
}
