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

MyApp.getInitialProps = async function({ Component, ctx }) {
  console.log(Component)
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps }
}

export default withData(MyApp);
