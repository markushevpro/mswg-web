import type { TImageData }    from '@/services/images'
import type { Screen }        from '@/services/screens'
import type { CSSProperties } from 'react'

import { useCallback, useMemo } from 'react'

import { useImages }     from '@/services/images'
import { useScreens }    from '@/services/screens'
import { useHookResult } from '@/shared/hooks/useHookResult'

import { getScreenStyle } from './helpers'

interface HScreenView
{
    style: CSSProperties
    image: TImageData | undefined
    update: ( data: TImageData ) => void
}

export
function useScreenView
( screen: Screen, offset: number ): HScreenView
{
    const { layout }                       = useScreens()
    const { images, update: updateImages } = useImages()

    const zoom  = useMemo(() => layout?.zoom ?? 1, [ layout?.zoom ])
    const image = useMemo(() => images?.[ screen.label ], [ images, screen.label ])
    const style = useMemo(() => getScreenStyle( screen, zoom, offset ), [ screen, zoom, offset ])

    const update = useCallback(
        ( data: TImageData ) => {
            updateImages( screen.label )( data )
        },
        [ screen.label, updateImages ]
    )

    return useHookResult({
        style,
        image,
        update
    })
}
