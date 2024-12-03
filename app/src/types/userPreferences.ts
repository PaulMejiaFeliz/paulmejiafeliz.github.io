import { SupportedAppLanguagesCodes } from './translation';

export type SupportedThemes = 'system' | 'light' | 'dark';

export type UserPreferences = {
  language: SupportedAppLanguagesCodes;
  theme: SupportedThemes;
};
