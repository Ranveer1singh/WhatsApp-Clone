import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react'
import Massenger from './component/messenger'
const App = () => {
const ClientId = "969238252330-m94jllvcmj4v9sr226ktumeh0u0blfnt.apps.googleusercontent.com"

  return (
    <GoogleOAuthProvider clientId={ClientId}>
      <Massenger />
    </GoogleOAuthProvider>
  )
}

export default App