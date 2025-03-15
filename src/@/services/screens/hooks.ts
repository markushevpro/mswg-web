'use client'

import { useCallback } from 'react'

import type { ScreensStore } from './store'

import { getSystemScreens } from './helpers'
import { useScreensStore }  from './store'

interface HScreens
    extends
    ScreensStore
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
        async () => {
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
