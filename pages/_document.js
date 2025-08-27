import Document, { Head, Html, Main, NextScript} from 'next/document';
import Typography from 'typography';
import altonTheme from 'typography-theme-alton';

const typography = new Typography(altonTheme);

class CustomDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
          <style dangerouslySetInnerHTML={{ __html: typography.toString() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;