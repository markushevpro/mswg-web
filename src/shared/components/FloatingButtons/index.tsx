import type { PropsWithChildren } from 'react'

import { ButtonToolbar } from 'rsuite'

import styles from './floating-buttons.module.css'

export
function FloatingButtons
({ children }: PropsWithChildren )
{
    return (
        <ButtonToolbar className={styles.buttons}>
            { children }
        </ButtonToolbar>
    )
}
