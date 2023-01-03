import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
// import logger from 'redux-logger';
import store from './app/store';
import { getTotals } from './features/CartSlice';
import { productsFetch } from './features/ProductSlice';
// import thunk from "redux-thunk" 
// import { createStore, applyMiddleware } from 'redux';

// import { configureStore } from '@reduxjs/toolkit';

// import ProductReducer, { productsFetch } from './features/ProductSlice';

// import CartSlice from "./features/CartSlice";

// const store = configureStore({
//   reducer: {ProductReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ProductReducer.middleware),
// });
store.dispatch(productsFetch());

store.dispatch(getTotals())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

