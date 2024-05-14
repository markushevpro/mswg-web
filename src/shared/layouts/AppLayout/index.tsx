import type { PropsWithChildren } from 'react'

import { Header, Content, Container } from 'rsuite'

import styles from './app-layout.module.css'

export
function AppLayout
({ children }: PropsWithChildren )
{
    return (
        <main className={styles.pageContainer}>
            <Container>
                <Header className={styles.header}>
                    MSWG
                </Header>

                <Content>
                    { children }
                </Content>
            </Container>
        </main>
    )
}
