import { Button } from 'rsuite'

interface IErrorScreenProps {
    title: string
    text?: string
    button?: string
    action?: () => void
}

export
function ErrorScreen
({ title, text, button, action }: IErrorScreenProps )
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
