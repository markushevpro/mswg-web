import { useEffect, useState } from 'react'

import type { IScreen } from './types'

declare global {
    interface Window {
        getScreenDetails?: () => Promise<{ screens: IScreen[] }>
    }
}

interface IUseScreensResult {
    loading: boolean
    screens: IScreen[]
    error: boolean
    denied: boolean
    available: boolean
    retry: () => Promise<void>
}

export function useScreens
(): IUseScreensResult
{
    const [ loading, $loading ] = useState<boolean>( true )
    const [ screens, $screens ] = useState<IScreen[]>([])
    const [ error, $error ] = useState<boolean>( false )
    const [ denied, $denied ] = useState<boolean>( false )

    const getScreens = async (): Promise<void> => {
        $loading( true )
        $error( false )

        try {
            const data = await window.getScreenDetails?.()
            $screens([].slice.call( data?.screens ?? []))

            $loading( false )
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch ( e: any ) {
            console.log( 'error', { e })
            $error( true )
            $loading( false )

            if ( e.message.includes( 'Permission denied' )) {
                $denied( true )
            }
        }
    }

    useEffect(() => {
        void getScreens()
    }, [])

    return {
        loading,
        screens,
        error,
        denied,
        available: typeof window !== 'undefined' && !!window.getScreenDetails,
        retry:     getScreens
    }
}
