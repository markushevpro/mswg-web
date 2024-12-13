import type { PropsWithChildren } from 'react'

import { ScreensList } from '@/segments/composition/ScreensList'
import { useScreens }  from '@/services/screens'
import { Container }   from '@/shared/ui-kit/Container'

export
function ScreensScreen
({ children }: PropsWithChildren )
{
    const { layout, style } = useScreens()

    if ( !layout ) {
        return (
            <Container style={style}>
                Calculating sizes...
            </Container>
        )
    }

    return (
        <Container style={style}>
            <ScreensList />
            { children }
        </Container>
    )
}
