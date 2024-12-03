export const languageCodes = ['en', 'es'] as const;

export type SupportedAppLanguagesCodes = (typeof languageCodes)[number];

export const isSupportedAppLanguagesCodes = (
  value: string
): value is SupportedAppLanguagesCodes =>
  languageCodes.includes(value as SupportedAppLanguagesCodes);

export type Translation = {
  [key in SupportedAppLanguagesCodes]: string;
};
