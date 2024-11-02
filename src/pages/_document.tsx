import { Html, Main, Head, NextScript } from "next/document";
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Document() {
  return (
    <Html lang="en">
      <Head title="Terminus Code Cracker">
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
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
      <GoogleAnalytics gaId="G-C3M54N8NDB" />
    </Html>
  );
}
