import { App } from '@/components/App'
import { apolloClient } from '@/libs/apollo'
import '@/styles/global.scss'
import { ApolloProvider } from '@apollo/client'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>,
)
