import { Loader } from 'rsuite'

import Center from '@/shared/components/Center'

import type { ReactNode } from 'react'

interface ILoadingScreenProps {
    className?: string
}

export default function LoadingScreen
({ className }: ILoadingScreenProps ): ReactNode
{
    return (
        <Center className={className}>
            <noscript>You need to enable JavaScript to use this app.</noscript>
            <Loader />
        </Center>
    )
}
