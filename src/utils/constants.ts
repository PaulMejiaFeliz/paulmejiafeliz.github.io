import { SupportedAppLanguagesCodes } from '../types/userPreferences';

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
export const SUPPORTED_APP_LOCALES = [
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'es',
    name: 'Español',
  },
];
