import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProductsAddedProvider } from './common/context/price-prowler/ProductsAddedProvider';

import './global.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import './global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsAddedProvider>
        <GoogleOAuthProvider clientId='771499577674-92ddmadnag09b4bbe2de9giaf5kie65c.apps.googleusercontent.com'>
          <App />
        </GoogleOAuthProvider>
      </ProductsAddedProvider>
    </BrowserRouter>
  </React.StrictMode>
);
