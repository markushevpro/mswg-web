import { PropsWithChildren } from 'react'
import { ButtonToolbar }     from 'rsuite'

import styles from './floating-buttons.module.css'

export default function FloatingButtons ({ children }: PropsWithChildren ) {
    return (
        <ButtonToolbar className={styles.buttons}>
            { children }
        </ButtonToolbar>
    )
}
