import { useCallback, useMemo } from 'react'

import { useGeneration } from '@/services/generation'
import { useScreens }    from '@/services/screens'
import { useHookResult } from '@/shared/hooks/useHookResult'

interface HGenerateWallpaperFlow
{
    ready: boolean
    active: boolean
    run: () => void
}

export
function useGenerateWallpaperFlow
(): HGenerateWallpaperFlow
{
    const { active, update } = useGeneration()
    const { layout, fixed }  = useScreens()

    const ready = useMemo(() => !!( layout && fixed ), [ fixed, layout ])

    const run = useCallback(
        () => {
            update({ active: true })
        },
        [ update ]
    )

    return useHookResult({
        ready,
        active,
        run
    })
}
