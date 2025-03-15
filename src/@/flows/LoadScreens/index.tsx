'use client'

import { ErrorScreen }    from '@/screens/Error'
import { LoadingOverlay } from '@/shared/ui-kit/LoadingOverlay'

import type { PropsWithChildren } from 'react'

import { useLoadScreensFlow } from './hook'

export
function LoadScreensFlow
({ children }: PropsWithChildren )
{
    const { loading, error, canRequest, request } = useLoadScreensFlow()

    if ( loading ) {
        return (
            <LoadingOverlay />
        )
    }

    if ( error ) {
        return (
            <ErrorScreen
                action={canRequest ? request : undefined}
                button={canRequest ? 'Request access' : undefined}
                text={error}
                title="Can't get your screens information"
            />
        )
    }

    return ( <>{ children }</> )
}
