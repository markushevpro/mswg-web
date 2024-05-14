export
type TMaybeAsync<T> = (() => T ) | (() => Promise<T> )
