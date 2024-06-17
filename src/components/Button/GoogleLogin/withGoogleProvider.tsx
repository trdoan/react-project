import { env } from '@/constants/env'
import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'

// eslint-disable-next-line react/display-name
export const withGoogleProvider = (Component: React.ElementType) => () => {
  return (
    <GoogleOAuthProvider clientId={env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Component />
    </GoogleOAuthProvider>
  )
}
