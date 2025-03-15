import { createRef } from 'react'
import { create }    from 'zustand'

import type { MutableRefObject } from 'react'

interface GenerationStoreData
{
    ref: MutableRefObject<HTMLCanvasElement | null>
    active: boolean
    loading: boolean
    done: boolean
}

interface GenerationStoreActions
{
    update: ( payload: Partial<GenerationStoreData> ) => void
}

export
type GenerationStore = GenerationStoreData & GenerationStoreActions

export
const useGenerationStore = create<GenerationStore>(( set ) => ({
    active:  false,
    loading: false,
    done:    false,
    ref:     createRef<HTMLCanvasElement>(),

    update: ( payload: Partial<GenerationStoreData> ) => {
        set({ ...payload })
    }
}))
