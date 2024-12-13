import type { PropsWithChildren } from 'react'

import { useScreens } from '@/services/screens'
import { Container }  from '@/shared/ui-kit/Container'

export
function ScreensContainer
({ children }: PropsWithChildren )
{
    const { style } = useScreens()

    return (
        <Container style={style}>
            { children }
        </Container>
    )
}
