import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './cities_reducer';
import activeCityReducer from './active_city_reducer';

// State and reducers
const reducers = configureStore({
  reducer: {
    cities: citiesReducer,
    activeCity: activeCityReducer
  }
});

export default reducers;
