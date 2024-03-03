import { useState } from 'react'

type IUseToggleStateResult = [ boolean, () => void, () => void, () => void ]

export function useToggleState ( initialState = false ): IUseToggleStateResult {
    const [ state, $state ] = useState<boolean>( initialState )

    const start = () => $state( true )
    const stop = () => $state( false )
    const toggle = () => $state( !state )

    return [ state, toggle, start, stop ]
}
