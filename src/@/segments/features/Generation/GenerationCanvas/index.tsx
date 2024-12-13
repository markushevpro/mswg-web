import { useGeneration } from '@/services/generation'
import { useScreens }    from '@/services/screens'

import styles from './generation-canvas.module.css'

export
function GenerationCanvas
()
{
    const { layout }      = useScreens()
    const { ref, redraw } = useGeneration()

    if ( !layout ) {
        return null
    }

    return (
        <canvas
            ref={ref}
            className={styles.canvas}
            height={layout.height}
            width={layout.width}
            onClick={redraw}
        />
    )
}
