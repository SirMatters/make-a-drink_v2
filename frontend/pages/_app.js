import { ApolloProvider } from '@apollo/client'
import withData from '../lib/withData'
import '../styles/globals.css'
import Page from '../components/Page'


function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  )
}

export default withData(MyApp);
