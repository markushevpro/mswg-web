import { Generation }   from '@/segments/features/Generation'
import { BottomButton } from '@/shared/ui-kit/BottomButton'
import { Container }    from '@/shared/ui-kit/Container'

import styles                from './generate-flow.module.css'
import { useGenerationFlow } from './hook'

export
function GenerationFlow
()
{
    const { ready, active, run } = useGenerationFlow()

    if ( !ready ) {
        return null
    }

    if ( !active ) {
        return (
            <BottomButton onClick={run}>
                Generate
            </BottomButton>
        )
    }

    return (
        <Container className={styles.overlay}>
            <Generation />
        </Container>
    )
}
