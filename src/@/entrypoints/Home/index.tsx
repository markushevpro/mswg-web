import { CreateWallpaperFlow } from '@/flows/CreateWallpaper'
import { AppLayout }           from '@/shared/layouts/AppLayout'

export
function HomePage
()
{
    return (
        <AppLayout>
            <CreateWallpaperFlow />
        </AppLayout>
    )
}
