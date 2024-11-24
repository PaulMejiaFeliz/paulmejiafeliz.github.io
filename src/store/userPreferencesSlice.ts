import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import {
  SupportedAppLanguagesCodes,
  SupportedThemes,
  userPreferences,
} from '../types/userPreferences';
import { DEFAULT_APP_LOCALE } from '../utils';
import i18n from '../utils/i18n';

const initialState: userPreferences = {
  language: DEFAULT_APP_LOCALE,
  theme: 'system',
};

const userPreferencesSlice = createSlice({
  name: 'userPreferences',
  initialState,
  reducers: {
    languageChanged(state, action: PayloadAction<SupportedAppLanguagesCodes>) {
      void i18n.changeLanguage(action.payload);
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
