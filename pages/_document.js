import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { GA_TRACKING_ID } from "../lib/gtag";

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
            content="Raaatio - A Generative noise pattern generator"
          />
          <meta
            name="description"
            content="Raaatio - A Generative noise pattern generator"
          />

          <meta
            name="title"
            content="Raaatio - A Generative noise pattern generator"
          />
          <meta
            name="description"
            content="Raaatio helps you create cool generative noise patterns for your website, product branding, or 3D projects."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://raaatio.com" />
          <meta
            property="og:title"
            content="Raaatio - A Generative noise pattern generator"
          />
          <meta
            property="og:description"
            content="Raaatio helps you create cool generative noise patterns for your website, product branding, or 3D projects."
          />
          <meta
            property="og:image"
            content="https://raaatio.com/static/cover.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://raaatio.com" />
          <meta
            property="twitter:title"
            content="Raaatio - A Generative noise pattern generator"
          />
          <meta
            property="twitter:description"
            content="Raaatio helps you create cool generative noise patterns for your website, product branding, or 3D projects."
          />
          <meta
            property="twitter:image"
            content="https://raaatio.com/static/cover.png"
          />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff"></meta>
          {this.props.styleTags}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
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
