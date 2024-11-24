export type SupportedAppLanguagesCodes = 'en' | 'es';
export type SupportedThemes = 'system' | 'light' | 'dark';

export type userPreferences = {
  language: SupportedAppLanguagesCodes;
  theme: SupportedThemes;
};
