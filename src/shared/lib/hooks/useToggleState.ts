import { useState } from 'react'

type IUseToggleStateResult = [ boolean, () => void, () => void, () => void ]

export function useToggleState
( initialState = false ): IUseToggleStateResult
{
    const [ state, $state ] = useState<boolean>( initialState )

    const start = (): void => {
        $state( true )
    }

    const stop = (): void => {
        $state( false )
    }

    const toggle = (): void => {
        $state( !state )
    }

    return [ state, toggle, start, stop ]
}
