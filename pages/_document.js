import Document, { Html, Head, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>NoiseIsNice - A very nice noise pattern generator</title>
          <meta
            name="title"
            content="NoiseIsNice - A very nice noise pattern generator"
          />
          <meta
            name="description"
            content="NoiseIsNice - A very nice noise pattern generator"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://noiseisnice.com" />
          <meta
            property="og:title"
            content="NoiseIsNice - A very nice noise pattern generator"
          />
          <meta
            property="og:description"
            content="NoiseIsNice - A very nice noise pattern generator"
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
