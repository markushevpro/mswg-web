import { useScreens } from '@/services/screens'
import { Container }  from '@/shared/ui-kit/Container'

import type { PropsWithChildren } from 'react'

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
