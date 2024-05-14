import type { CSSProperties, PropsWithChildren } from 'react'

import cn from 'classnames'

import styles from './container.module.css'

interface IContainerProps extends PropsWithChildren {
    className?: string
    style?: CSSProperties
}

export
function Container
({ children, className, style }: IContainerProps )
{
    return (
        <div className={cn( styles.container, className )} style={style}>
            { children }
        </div>
    )
}
