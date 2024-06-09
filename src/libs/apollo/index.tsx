import { ApolloClient, InMemoryCache } from '@apollo/client'
import { env } from '@/constants/env'

export const apolloClient = new ApolloClient({
  uri: env.REACT_APP_GRAPHQL_URI,
  cache: new InMemoryCache(),
})
