import { Html, Main, Head, NextScript } from "next/document";
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
      <GoogleAnalytics gaId="G-C3M54N8NDB" />
    </Html>
  );
}
