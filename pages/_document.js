import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { Provider } from 'rebass'
import theme from '../components/theme.js'

export default class MyDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleTags()
    return (
      <html>
        <Head>
          <script src='/static/js/google-tag-manager.js'></script>
          <script src='/static/js/google-calls.js'></script>

          <title>My page</title>
          <script dangerouslySetInnerHTML={{ __html: styleTags }} />
        </Head>
        <body>
          <Provider theme={theme} className='root'>
            {main}
          </Provider>
          <NextScript />
        </body>
      </html>
    )
  }
}
