import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './Redux/store.js'
import { Auth0Provider } from '@auth0/auth0-react'
const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
            <Auth0Provider
               domain={domain}
               clientId={clientId}
               authorizationParams={{
                redirect_uri: window.location.origin
              }}
            >
                 <App />
            </Auth0Provider>,
          </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
