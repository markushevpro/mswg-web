import type { MutableRefObject } from 'react'

import { createRef } from 'react'
import { create }    from 'zustand'

interface IGenerationStoreData
{
    ref: MutableRefObject<HTMLCanvasElement | null>
    active: boolean
    loading: boolean
    done: boolean
}

interface IGenerationStoreActions
{
    update: ( payload: Partial<IGenerationStoreData> ) => void
}

export
type IGenerationStore = IGenerationStoreData & IGenerationStoreActions

export
const useGenerationStore = create<IGenerationStore>(( set ) => ({
    active:  false,
    loading: false,
    done:    false,
    ref:     createRef<HTMLCanvasElement>(),

    update: ( payload: Partial<IGenerationStoreData> ) => {
        set({ ...payload })
    }
}))
