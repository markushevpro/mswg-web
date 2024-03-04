import EditFlow        from '@/flows/Edit'
import ScreensInfoFlow from '@/flows/ScreensInfo'
import Center          from '@/shared/components/Center'

import type { ReactNode } from 'react'

export default function MainFlow
(): ReactNode
{
    return (
        <Center>
            <ScreensInfoFlow>
                <EditFlow />
            </ScreensInfoFlow>
        </Center>
    )
}
