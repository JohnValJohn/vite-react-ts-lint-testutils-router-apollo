import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';

import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const el = document.getElementById('root');

if (el === null) { throw new Error('Root container missing'); }

ReactDOM.createRoot(el).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
);
