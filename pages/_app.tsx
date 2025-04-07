import type { AppProps } from 'next/app';
import { Source_Sans_Pro } from '@next/font/google';
import { Global } from '@emotion/react';
import { colors, global } from "@styles";
import Head from 'next/head';

const font = Source_Sans_Pro({
  weight: ['300', '600'],
  subsets: ['latin'],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
          font-weight: 300;
        }
      `}</style>
      <Global styles={global} />
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content={colors.primary} />
        <meta
          name="msapplication-config"
          content="images/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content={colors.primary} />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
