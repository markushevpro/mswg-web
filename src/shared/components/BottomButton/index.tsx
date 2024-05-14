import type { ButtonProps } from 'rsuite'

import cn         from 'classnames'
import { Button } from 'rsuite'

import styles from './bottom-button.module.css'

export
function BottomButton
({ className, children, ...props }: ButtonProps )
{
    return (
        <Button appearance='primary' {...props} className={cn( className, styles.button )}>
            { children }
        </Button>
    )
}
