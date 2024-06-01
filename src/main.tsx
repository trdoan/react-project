import { ApolloProvider } from '@apollo/client'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App'
import { apolloClient } from './libs/apollo'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)
