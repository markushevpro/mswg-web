'use client'

import type { IScreensStore } from './store'

import { useCallback } from 'react'

import { getSystemScreens } from './helpers'
import { useScreensStore }  from './store'

interface HScreens
    extends
    IScreensStore
{
    available: boolean
    retry: () => Promise<void>
}

export
function useScreens
(): HScreens
{
    const { update, ...rest } = useScreensStore()

    const getScreens = useCallback(
        async (): Promise<void> => {
            update({
                loading: true,
                error:   false
            })

            const res = await getSystemScreens()

            update( res )
        },
        [ update ]
    )

    return {
        ...rest,
        update,
        available: typeof window !== 'undefined' && !!window.getScreenDetails,
        retry:     getScreens
    }
}
