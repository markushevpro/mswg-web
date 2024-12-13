import type { ButtonProps } from 'rsuite'

import { Loader, Button as RButton } from 'rsuite'

interface PButton
    extends
    ButtonProps
{
    loading?: boolean
}

export
function Button
({ loading, children, ...rest }: PButton )
{
    return (
        <RButton {...rest}>
            {
                loading
                    ? <Loader />
                    : children
            }
        </RButton>
    )
}
