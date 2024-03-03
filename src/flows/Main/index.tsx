import EditFlow        from '@/flows/Edit'
import ScreensInfoFlow from '@/flows/ScreensInfo'
import Center          from '@/shared/components/Center'


export default function MainFlow () {
    return (
        <Center>
            <ScreensInfoFlow>
                <EditFlow />
            </ScreensInfoFlow>
        </Center>
    )
}
