import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react'
import Massenger from './component/messenger'
import AccountProvider from './context/AccountProvider';
const App = () => {
const ClientId = "872576635872-gus9vrpq2i8rocl03tr3cihg87mp4pbc.apps.googleusercontent.com"

  return (
    <GoogleOAuthProvider clientId={ClientId}>
      <AccountProvider>
        <Massenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App