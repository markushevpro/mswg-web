import { ScreensList } from '@/segments/appearance/ScreensList'
import { useScreens }  from '@/services/screens'
import { Container }   from '@/shared/ui-kit/Container'

export
function ScreensScreen
()
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
        </Container>
    )
}
