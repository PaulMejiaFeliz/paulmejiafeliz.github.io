import { SupportedAppLanguagesCodes, SupportedLanguages } from './types';

/**
 * The default locale for the app.
 */
export const DEFAULT_APP_LOCALE: SupportedAppLanguagesCodes = 'en';

/**
 * The supported locales for the app.
 *
 * These should correspond with the JSON files in the `locales` folder.
 *
 * @example
 *   en.json
 *   es.json
 */
export const SUPPORTED_APP_LOCALES: SupportedLanguages = {
  en: 'English',
  es: 'Español',
};

export const API_BASE_URL = 'http://127.0.0.1:5500/data/';
