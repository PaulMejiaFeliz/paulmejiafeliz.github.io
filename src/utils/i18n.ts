import i18n from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

// declare custom type options so the return is always a string.

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

/**
 * The default locale for the app.
 */
const DEFAULT_APP_LOCALE = 'en';

/**
 * The supported locales for the app.
 *
 * These should correspond with the JSON files in the `locales` folder.
 *
 * @example
 *   en.json
 *   es.json
 */
const SUPPORTED_APP_LOCALES = ['en', 'es'];

function localResourcesToBackend() {
  return resourcesToBackend(async (locale: string, _namespace: string) => {
    return (await import(`../locales/${locale}.json`)).default;
  });
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(localResourcesToBackend())
  .init({
    lng: DEFAULT_APP_LOCALE,
    fallbackLng: DEFAULT_APP_LOCALE,
    supportedLngs: SUPPORTED_APP_LOCALES,
    returnNull: false,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      // Wait for the locales to be loaded before rendering the app
      // instead of using a Suspense component
      useSuspense: false,
    },
  });

export default i18n;
