import { useEffect } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { appWithTranslation } from 'next-i18next'

import { ChakraProvider } from '@chakra-ui/react'

import { FontFace } from '@components/FontFace'

import { useRouteChanged } from '@hooks/useRouteChanged'

import { getSeo } from '@utils/seo'
import { pageView } from '@utils/ga'
import { theme } from '../src/theme'
import 'focus-visible'

function App ({ Component, pageProps }: AppProps) {
  const seo = getSeo()
  const router = useRouter()

  useRouteChanged(pageView)

  useEffect(() => {
    router.events.on('routeChangeComplete', pageView)
    return () => {
      router.events.off('routeChangeComplete', pageView)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link rel='icon' type='image/png' sizes='96x96' href='/favicon.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://avatars.githubusercontent.com' />
        <link rel='preconnect' href='https://logo.clearbit.com' />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || []
            function gtag (){ dataLayer.push(arguments) }
            gtag('js', new Date())
            gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname
            })
          `
          }}
        />
        <meta name='theme-color' content='#D76565' />
        <FontFace />
      </Head>
      <DefaultSeo {...seo} />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      <FontFace />
    </>
  )
}

export default appWithTranslation(App)