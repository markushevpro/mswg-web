import cn from 'classnames'

import styles from './container.module.css'

import type { CSSProperties, PropsWithChildren, ReactNode } from 'react'

interface IContainerProps extends PropsWithChildren {
    className?: string
    style?: CSSProperties
}

export default function Container
({ children, className, style }: IContainerProps ): ReactNode
{
    return (
        <div className={cn( styles.container, className )} style={style}>
            { children }
        </div>
    )
}
