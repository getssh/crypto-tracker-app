import { configureStore } from '@reduxjs/toolkit';
import trendingReducer from './homeSlice';
import coinsReducer from './coinSlice';

const store = configureStore({
  reducer: {
    trending: trendingReducer,
    coins: coinsReducer,
  }
});

export default store;