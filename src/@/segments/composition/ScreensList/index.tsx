import { ScreenView } from '@/segments/composition/ScreenView'
import { useScreens } from '@/services/screens'

import type { Screen } from '@/services/screens'

import { EDITOR_PADDING } from './consts'

export
function ScreensList
()
{
    const { fixed } = useScreens()

    if ( !fixed ) {
        return null
    }

    return fixed.map(( screen: Screen ) => (
        <ScreenView
            key={screen.label}
            offset={EDITOR_PADDING}
            screen={screen}
        />
    ))
}
