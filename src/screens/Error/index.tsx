import { Button } from 'rsuite'

import type { ReactNode } from 'react'

interface IErrorScreenProps {
    title: string
    text?: string
    button?: string
    action?: () => void
}

export default function ErrorScreen
({ title, text, button, action }: IErrorScreenProps ): ReactNode
{
    return (
        <>
            <h1>{ title }</h1>

            {
                text && (
                    <p>{ text }</p>
                )
            }

            {
                ( button && action ) && (
                    <>
                        <br />

                        <Button appearance="primary" onClick={action}>
                            { button }
                        </Button>
                    </>
                )
            }
        </>
    )
}
