import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(movies);

root.render(
  <React.StrictMode>
    <App store = {store} />
  </React.StrictMode>
);
