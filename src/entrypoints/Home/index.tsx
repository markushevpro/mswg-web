import { MainFlow }  from '@/flows/Main'
import { AppLayout } from '@/shared/layouts/AppLayout'

export
function HomePage
()
{
    return (
        <AppLayout>
            <MainFlow />
        </AppLayout>
    )
}
