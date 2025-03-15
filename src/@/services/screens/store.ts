import { create } from 'zustand'

import type { Screen, ScreensLayout, SystemScreensState } from '@/services/screens'
import type { CSSProperties }                             from 'react'

interface ScreensStoreData
    extends
    SystemScreensState
{
    fixed: Screen[] | undefined
    layout: ScreensLayout | undefined
    style: CSSProperties | undefined
}

interface ScreensStoreActions
{
    update: ( payload: Partial<ScreensStoreData> ) => void
}

export
type ScreensStore = ScreensStoreData & ScreensStoreActions

export
const useScreensStore = create<ScreensStore>(( set ) => ({
    loading: true,
    error:   false,
    denied:  false,
    screens: undefined,
    fixed:   undefined,
    layout:  undefined,
    style:   undefined,

    update: ( payload: Partial<ScreensStoreData> ) => {
        set({ ...payload })
    }
}))
