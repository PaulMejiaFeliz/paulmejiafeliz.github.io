import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { DEFAULT_APP_LOCALE } from '../constants';
import {
  SupportedAppLanguagesCodes,
  SupportedThemes,
  UserPreferences,
} from '../types';

const initialState: UserPreferences = {
  language: DEFAULT_APP_LOCALE,
  theme: 'system',
};

const userPreferencesSlice = createSlice({
  name: 'userPreferences',
  initialState,
  reducers: {
    languageChanged(state, action: PayloadAction<SupportedAppLanguagesCodes>) {
      state.language = action.payload;
    },
    themeChanged(state, action: PayloadAction<SupportedThemes>) {
      state.theme = action.payload;
    },
  },
});

export const { languageChanged, themeChanged } = userPreferencesSlice.actions;
export const selectUserPreferences = (state: RootState) =>
  state.userPreferences;
export const userPreferencesReducer = userPreferencesSlice.reducer;
