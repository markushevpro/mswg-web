import { LoadScreensFlow }  from '@/flows/LoadScreens'
import { ScreensScreen }    from '@/screens/Screens'
import { ScreensContainer } from '@/segments/composition/ScreensContainer'

import type { PropsWithChildren } from 'react'

export
function UpdateImagesFlow
({ children }: PropsWithChildren )
{
    return (
        <LoadScreensFlow>
            <ScreensContainer>
                <ScreensScreen />
                { children }
            </ScreensContainer>
        </LoadScreensFlow>
    )
}
