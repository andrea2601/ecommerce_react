import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import {reducer} from "./store/reducer";
import createSagaMiddleware from "redux-saga";
import mySaga from "./store/sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  cart: reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(mySaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
