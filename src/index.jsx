// external modules
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
const reducers = configureStore({
  reducer: {
    changeMe: (state = null, action) => state
  }
});

// render an instance of the component in the DOM
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={reducers}>
    <App />
  </Provider>
);
