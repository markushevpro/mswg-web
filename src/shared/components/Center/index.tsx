import type { PropsWithChildren } from 'react'

import cn from 'classnames'

import styles from './center.module.css'

interface ICenterProps extends PropsWithChildren {
    className?: string
}

export
function Center
({ children, className }: ICenterProps )
{
    return (
        <div className={cn( styles.center, className )}>
            { children }
        </div>
    )
}
