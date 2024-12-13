import { ScreensList } from '@/segments/composition/ScreensList'
import { useScreens }  from '@/services/screens'

export
function ScreensScreen
()
{
    const { layout } = useScreens()

    if ( !layout ) {
        return 'Calculating sizes...'
    }

    return (
        <ScreensList />
    )
}
