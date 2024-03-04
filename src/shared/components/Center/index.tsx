import cn from 'classnames'

import styles from './center.module.css'

import type { PropsWithChildren, ReactNode } from 'react'

interface ICenterProps extends PropsWithChildren {
    className?: string
}

export default function Center
({ children, className }: ICenterProps ): ReactNode
{
    return (
        <div className={cn( styles.center, className )}>
            { children }
        </div>
    )
}
