'use client'

import type { ReactElement } from 'react'

import { cloneElement } from 'react'

import { ErrorScreen }   from '@/screens/Error'
import { LoadingScreen } from '@/screens/Loading'
import { useScreens }    from '@/services/screens'

import { getErrorText } from './helpers'

interface IScreensInfoProps {
    children: ReactElement
}

export
function ScreensInfoFlow
({ children }: IScreensInfoProps )
{
    const { screens, denied, error, loading, available, retry } = useScreens()

    const requestAccess = () => {
        if ( typeof window !== 'undefined' ) {
            void retry()
        }
    }

    if ( loading ) {
        return (
            <LoadingScreen />
        )
    }

    if ( error ) {
        return (
            <ErrorScreen
                action={available && !denied ? requestAccess : undefined}
                button={available && !denied ? 'Request access' : undefined}
                text={getErrorText( available, denied )}
                title="Can't get your screens information"
            />
        )
    }

    return children ? cloneElement( children, { screens }) : null
}
