import { SafeAreaView } from 'react-native'
import { H1, H2, Paragraph, ScrollView, Text, YStack } from 'tamagui'

export default function App() {
    return (
        <SafeAreaView>
            <ScrollView maxHeight={50}>
                <YStack
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor="$brand"
                    padding="$4"
                >
                    <H1 fontSize={40}>Welcome to Expo + Next.js 👋</H1>
                    <H2 fontSize={30}>H2 Heading Here</H2>
                    <Paragraph fontSize={20}>Tamagui Paragraph</Paragraph>
                </YStack>
            </ScrollView>
        </SafeAreaView>
    )
}
