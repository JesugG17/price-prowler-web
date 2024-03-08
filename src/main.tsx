import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProductsAddedProvider } from './common/context/price-prowler/ProductsAddedProvider';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsAddedProvider>
        <App />
      </ProductsAddedProvider>
    </BrowserRouter>
  </React.StrictMode>
);
