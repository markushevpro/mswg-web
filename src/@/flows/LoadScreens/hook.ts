import { useCallback, useEffect, useMemo } from 'react'
import { useEffectOnce, useWindowSize }    from 'usehooks-ts'

import { calculateScreensLayout, fixScreenOffsetMap, useScreens } from '@/services/screens'
import { useHookResult }                                          from '@/shared/hooks/useHookResult'

import { getErrorText } from './helpers'

interface HLoadScreensFlow
{
    loading: boolean
    error: string | null
    canRequest: boolean
    request: () => void
}

export
function useLoadScreensFlow
(): HLoadScreensFlow
{
    const size = useWindowSize()

    const { denied, error, loading, available, screens, update, retry } = useScreens()

    const canRequest = useMemo(() => available && !denied, [ available, denied ])
    const errorText  = useMemo(() => error ? getErrorText( available, denied ) : null, [ available, denied, error ])

    const request = useCallback(
        () => {
            if ( typeof window !== 'undefined' ) {
                void retry()
            }
        },
        [ retry ]
    )

    const updateFixed = useCallback(
        (): void => {
            if ( screens ) {
                const data = calculateScreensLayout([].slice.call( screens ), size )

                update({
                    layout: data,
                    fixed:  screens.map( fixScreenOffsetMap( data.left, data.top )),
                    style:  {
                        width:  data.width / data.zoom,
                        height: data.height / data.zoom
                    }
                })
            }
        },
        [ screens, size, update ]
    )

    useEffect(
        () => {
            updateFixed()
        },
        [ updateFixed ]
    )

    useEffectOnce(() => {
        void retry()
    })

    return useHookResult({
        loading,
        error: errorText,
        canRequest,
        request
    })
}
