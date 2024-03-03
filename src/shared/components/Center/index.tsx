import cn                    from 'classnames'
import { PropsWithChildren } from 'react'

import styles from './center.module.css'

interface ICenterProps extends PropsWithChildren {
    className?: string;
}

export default function Center ({ children, className }: ICenterProps ) {
    return (
        <div className={cn( styles.center, className )}>
            { children }
        </div>
    )
}
