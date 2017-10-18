import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleTags();

    return (
      <html>
        <Head>
          <script>dataLayer = [];</script>
          <script src="/static/js/google-tag-manager.js" />
          <title>My page</title>
          <style dangerouslySetInnerHTML={{ __html: styleTags }} />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TNFDHLZ" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`
            }}
          />

          <div className="root">{main}</div>
          <NextScript />
          
        </body>
      </html>
    );
  }
}
