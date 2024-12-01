export type SupportedAppLanguagesCodes = 'en' | 'es';
export type SupportedThemes = 'system' | 'light' | 'dark';

export type SupportedLanguages = {
  [key in SupportedAppLanguagesCodes]: string;
};

export type UserPreferences = {
  language: SupportedAppLanguagesCodes;
  theme: SupportedThemes;
};
