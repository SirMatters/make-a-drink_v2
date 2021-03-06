import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import withApollo from "next-with-apollo";
import { createUploadLink } from 'apollo-upload-client'
import { onError } from '@apollo/link-error'
import { endpoint, prodEndpoint } from '../config';


function createClient({headers, initialState}) {
  return new ApolloClient({
    link: ApolloLink.from([
      onError(({graphQLErrors, networkError}) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({message, locations, path}) => 
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          )
        if (networkError)
          console.log(
            `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
          )
      }),
      createUploadLink({
        uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
        fetchOptions: {
          creadentials: 'include'
        },
        // eneables SSR with logged in state
        headers
      })
    ]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // 
          }
        }
      }
    })
  })
}

export default withApollo(createClient)