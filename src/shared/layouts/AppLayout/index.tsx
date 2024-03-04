import { Header, Content, Container } from 'rsuite'

import styles from './app-layout.module.css'

import type { PropsWithChildren, ReactNode } from 'react'

export default function AppLayout
({ children }: PropsWithChildren ): ReactNode
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
