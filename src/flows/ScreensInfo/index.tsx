'use client'

import { cloneElement } from 'react'

import ErrorScreen    from '@/screens/Error'
import LoadingScreen  from '@/screens/Loading'
import { useScreens } from '@/services/screens'

import { getErrorText } from './helpers'

import type { ReactElement, ReactNode } from 'react'

interface IScreensInfoProps {
    children: ReactElement
}

export default function ScreensInfoFlow
({ children }: IScreensInfoProps ): ReactNode
{
    const { screens, denied, error, loading, available, retry } = useScreens()

    const requestAccess = async (): Promise<void> => {
        if ( typeof window !== 'undefined' ) {
            await retry()
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
