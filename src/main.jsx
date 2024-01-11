import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-66sq8itmyxq4ycum.us.auth0.com"
    clientId="qlzBqgz7xMDfpfQSdTFs2M0KyUAiH3yg"
    authorizationParams={{
      redirect_uri: 'http://localhost:5173/dashboard/'
    }}>
    <App />
    </Auth0Provider>
  </React.StrictMode>,
)
