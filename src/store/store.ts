import { configureStore } from '@reduxjs/toolkit';
import { userPreferencesReducer } from './userPreferencesSlice';

export const store = configureStore({
  reducer: {
    userPreferences: userPreferencesReducer,
  },
});

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
