import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProductsAddedProvider } from './common/context/price-prowler/ProductsAddedProvider';

import './global.css';
// import './global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsAddedProvider>
        <App />
      </ProductsAddedProvider>
    </BrowserRouter>
  </React.StrictMode>
);
