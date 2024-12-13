'use client'

import type { PropsWithChildren } from 'react'

import { ErrorScreen }    from '@/screens/Error'
import { LoadingOverlay } from '@/shared/ui-kit/LoadingOverlay'

import { useScreensLoaderFlow } from './hook'

export
function ScreensLoaderFlow
({ children }: PropsWithChildren )
{
    const { loading, error, canRequest, request } = useScreensLoaderFlow()

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
