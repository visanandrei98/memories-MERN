import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; // Importă configureStore din Redux Toolkit
import {thunk} from 'redux-thunk'; // Importă thunk din redux-thunk
import reducers from './reducers';
import App from './App';
import { createRoot } from 'react-dom/client';

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
