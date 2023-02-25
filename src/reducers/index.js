// external modules
import { configureStore } from '@reduxjs/toolkit';
// import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import citiesReducer from './cities_reducer';
import activeCityReducer from './active_city_reducer';

// State and reducers
const reducers = configureStore({
  reducer: {
    cities: citiesReducer,
    activeCity: activeCityReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(reduxPromise)
});

export default reducers;
