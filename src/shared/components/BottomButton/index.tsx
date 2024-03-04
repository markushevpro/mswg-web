import cn         from 'classnames'
import { Button } from 'rsuite'

import styles from './bottom-button.module.css'

import type { ReactNode }   from 'react'
import type { ButtonProps } from 'rsuite'

export default function BottomButton
({ className, children, ...props }: ButtonProps ): ReactNode
{
    return (
        <Button appearance='primary' {...props} className={cn( className, styles.button )}>
            { children }
        </Button>
    )
}
