import { ButtonToolbar } from 'rsuite'

import styles from './floating-buttons.module.css'

import type { PropsWithChildren, ReactNode } from 'react'

export default function FloatingButtons
({ children }: PropsWithChildren ): ReactNode
{
    return (
        <ButtonToolbar className={styles.buttons}>
            { children }
        </ButtonToolbar>
    )
}
