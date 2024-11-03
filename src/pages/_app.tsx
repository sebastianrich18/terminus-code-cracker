// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Script from 'next/script';
import "@/styles/globals.css";
import Head from 'next/head';

const GA_TRACKING_ID = 'G-C3M54N8NDB'; // Replace with your actual tracking ID

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window.gtag === 'function') {
        window.gtag('config', GA_TRACKING_ID, {
          page_path: url,
        });
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Terminus Code Cracker</title>
        <meta name="google-site-verification" content="SJ4Yc2P8dEO-3nLa5bF2VGYBETup0GGqE4-RkyiKLY8" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Tool for solving Terminus Beam Smasher algebra step" />
        <meta name="keywords" content="terminus, code, beamsmasher, calculator, cracker, bo6, black ops 6, easter egg, ee, step, algebra, peck" />
        <meta name="author" content="Sibby418" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content="Terminus Code Cracker" />
        <meta property="og:description" content="Tool for solving Terminus Beam Smasher algebra step" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://terminuscodecracker.com" />
        <meta property="og:image" content="https://terminuscodecracker.com/site-image.png" />
        <meta property="og:site_name" content="Terminus Code Cracker" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terminus Code Cracker" />
        <meta name="twitter:description" content="Tool for solving Terminus Beam Smasher algebra step" />
        <meta name="twitter:image" content="https://terminuscodecracker.com/site-image.png" />
        <meta name="twitter:site" content="@sebastianrich02" />
        <meta name="twitter:creator" content="@sebastianrich02" />

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;