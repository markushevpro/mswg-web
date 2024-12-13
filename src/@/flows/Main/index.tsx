'use client'

import { GenerationFlow }    from '@/flows/Generation'
import { ScreensLoaderFlow } from '@/flows/ScreensLoader'
import { ScreensScreen }     from '@/screens/Screens'
import { Center }            from '@/shared/ui-kit/Center'

export
function MainFlow
()
{
    return (
        <Center>
            <ScreensLoaderFlow>
                <ScreensScreen />
                <GenerationFlow />
            </ScreensLoaderFlow>
        </Center>
    )
}
