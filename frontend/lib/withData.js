import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import withApollo from "next-with-apollo";

function createClient({headers, initialState}) {
  return new ApolloClient({
    link: ApolloLink.from([]),
    cache: new InMemoryCache({})
  })
}

export default withApollo(createClient)