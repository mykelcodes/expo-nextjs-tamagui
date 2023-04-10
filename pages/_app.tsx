import '../assets/font.css'

import Head from 'next/head'
import { TamaguiProvider } from 'tamagui'

import config from '../tamagui.config'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <TamaguiProvider config={config}>
                <Component {...pageProps} />
            </TamaguiProvider>
        </>
    )
}
