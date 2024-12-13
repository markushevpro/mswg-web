'use client'

import { GenerateWallpaperFlow } from '@/flows/GenerateWallpaper'
import { UpdateImagesFlow }      from '@/flows/UpdateImages'
import { Center }                from '@/shared/ui-kit/Center'

export
function CreateWallpaperFlow
()
{
    return (
        <Center>
            <UpdateImagesFlow>
                <GenerateWallpaperFlow />
            </UpdateImagesFlow>
        </Center>
    )
}
