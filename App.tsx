// Use next.js page for the mobile app
import { TamaguiProvider } from 'tamagui'
import Home from './pages'
import config from './tamagui.config'
import { useFonts } from 'expo-font'

export default function () {
    const [loaded] = useFonts({
        DeliciousHandrawn: require('./assets/DeliciousHandrawn-Regular.ttf'),
    })

    if (!loaded) return null

    return (
        <TamaguiProvider config={config}>
            <Home />
        </TamaguiProvider>
    )
}
