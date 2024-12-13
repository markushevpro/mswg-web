import type { TImages } from './types'

import { create } from 'zustand'

interface IImagesStoreData
{
    images: TImages
}

interface IImagesStoreActions
{
    update: ( payload: Partial<IImagesStoreData> ) => void
}

export
type IImagesStore = IImagesStoreData & IImagesStoreActions

export
const useImagesStore = create<IImagesStore>(( set ) => ({
    images: {},

    update: ( payload: Partial<IImagesStoreData> ) => {
        set({ ...payload })
    }
}))
