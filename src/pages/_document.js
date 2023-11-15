import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="FH | one step solution provider"
          />
          <meta
            name="description"
            content="FH | one step solution provider"
          />
          <meta name="author" content="" />
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <meta name="robots" content="max-image-preview:large"/>
          {/* Google Fonts */}
          <link
            href="/css/font-awesome.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link href="/css/ionicons.min.css" rel="stylesheet" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
