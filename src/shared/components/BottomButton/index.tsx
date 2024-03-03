import cn                      from 'classnames'
import { Button, ButtonProps } from 'rsuite'

import styles from './bottom-button.module.css'

export default function BottomButton ({ className, children, ...props }: ButtonProps ) {
    return (
        <Button appearance='primary' {...props} className={cn( className, styles.button )}>
            { children }
        </Button>
    )
}
