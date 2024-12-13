import type { TImageData, TImages } from './types'

import { useCallback } from 'react'

import { useHookResult } from '@/shared/hooks/useHookResult'

import { useImagesStore } from './store'

interface HImages
{
    images: TImages
    update: ( label: string ) => ( image: TImageData ) => void
}

export
function useImages
(): HImages
{
    const { images, update: updateStore } = useImagesStore()

    const update = useCallback(
        ( label: string ) => ( image: TImageData ) => {
            const updated    = { ...images }
            updated[ label ] = image
            updateStore({ images: updated })
        },
        [ images, updateStore ]
    )

    return useHookResult({
        images,
        update
    })
}
