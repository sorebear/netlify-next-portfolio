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
          <title>Soren Baird</title>
          <meta
            property="og:title"
            content="Soren Baird - Web Developer, CMS Developer, Mobile Developer"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/sorebear/image/upload/v1544489724/portfolio/home.png"
          />
          <meta property="og:url" content="https://sorenbaird.com" />
          <meta
            property="og:description"
            content="I am a Full Stack Web Developer living and coding in Orange County, CA."
          />
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