import Document, { Html, Head, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="title"
            content="noisewave - A very nice noise pattern generator"
          />
          <meta
            name="description"
            content="noisewave - A very nice noise pattern generator"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://noiseisnice.com" />
          <meta
            property="og:title"
            content="noisewave - A very nice noise pattern generator"
          />
          <meta
            property="og:description"
            content="noisewave - A very nice noise pattern generator"
          />
          <meta
            property="og:image"
            content="https://noiseisnice.com/cover.png"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://noiseisnice.com" />
          <meta
            property="twitter:title"
            content="NoiseIsNice - A very nice noise pattern generator"
          />
          <meta
            property="twitter:description"
            content="NoiseIsNice - A very nice noise pattern generator"
          />
          <meta
            property="twitter:image"
            content="https://noiseisnice.com/cover.png"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
            rel="stylesheet"
          ></link>
          {this.props.styleTags}
          <script key="youtube-embed" src="/static/perlin.js" defer async />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
