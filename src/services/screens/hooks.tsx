import { useEffect, useState } from 'react'

import { IScreen } from './types'

declare global {
    interface Window {
        getScreenDetails?: () => Promise<{ screens: IScreen[] }>
    }
}

export function useScreens () {
    const [ loading, $loading ] = useState<boolean>( true )
    const [ screens, $screens ] = useState<IScreen[]>([])
    const [ error, $error ] = useState<boolean>( false )
    const [ denied, $denied ] = useState<boolean>( false )

    const getScreens = async () => {
        $loading( true )
        $error( false )

        try {
            const data = await window.getScreenDetails?.()
            $screens([].slice.call( data?.screens ?? []))

            $loading( false )
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
        getScreens()
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
