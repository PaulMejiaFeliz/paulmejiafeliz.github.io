export type SupportedAppLanguagesCodes = 'en' | 'es';

export type SupportedLanguages = {
  [key in SupportedAppLanguagesCodes]: string;
};
