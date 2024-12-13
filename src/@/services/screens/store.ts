import type { Screen, ScreensLayout, SystemScreensState } from '@/services/screens'
import type { CSSProperties }                             from 'react'

import { create } from 'zustand'

interface IScreensStoreData
    extends
    SystemScreensState
{
    fixed: Screen[] | undefined
    layout: ScreensLayout | undefined
    style: CSSProperties | undefined
}

interface IScreensStoreActions
{
    update: ( payload: Partial<IScreensStoreData> ) => void
}

export
type IScreensStore = IScreensStoreData & IScreensStoreActions

export
const useScreensStore = create<IScreensStore>(( set ) => ({
    loading: true,
    error:   false,
    denied:  false,
    screens: undefined,
    fixed:   undefined,
    layout:  undefined,
    style:   undefined,

    update: ( payload: Partial<IScreensStoreData> ) => {
        set({ ...payload })
    }
}))
