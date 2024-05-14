import type { Metadata }  from 'next'
import type { ReactNode } from 'react'

import cn        from 'classnames'
import { Inter } from 'next/font/google'
import 'rsuite/dist/rsuite.min.css'

import '@/shared/config/styles/globals.css'

const inter = Inter({ subsets: [ 'latin', 'cyrillic' ] })

export
const metadata: Metadata = {
    title:       'Multi Screen Wallpaper Generator',
    description: 'Generate a single wallpaper image for muiltiple screens set'
}

interface IRootLayoutProps
{
    children: ReactNode
}

export
function RootLayout
({ children }: Readonly<IRootLayoutProps> )
{
    return (
        <html lang="en">
            <body className={cn( 'rs-theme-dark', inter.className )}>{children}</body>
        </html>
    )
}
