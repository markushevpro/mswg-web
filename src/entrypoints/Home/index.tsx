import MainFlow  from '@/flows/Main'
import AppLayout from '@/shared/layouts/AppLayout'

import type { ReactNode } from 'react'

export default function HomePage
(): ReactNode
{
    return (
        <AppLayout>
            <MainFlow />
        </AppLayout>
    )
}
