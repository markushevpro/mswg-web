import type { ComponentProps } from 'react'

import cn from 'classnames'

import { Button } from '@/shared/ui-kit/Button'

import styles from './bottom-button.module.css'

export
function BottomButton
({ className, children, ...props }: ComponentProps<typeof Button> )
{
    return (
        <Button appearance='primary' {...props} className={cn( className, styles.button )}>
            { children }
        </Button>
    )
}
