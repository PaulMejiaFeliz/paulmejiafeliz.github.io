import i18n from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';
import { DEFAULT_APP_LOCALE, SUPPORTED_APP_LOCALES } from './constants';

function localResourcesToBackend() {
  return resourcesToBackend(async (locale: string, _namespace: string) => {
    return (await import(`../locales/${locale}.json`)).default;
  });
}

const locales = SUPPORTED_APP_LOCALES.map((l) => l.code);

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(localResourcesToBackend())
  .init({
    lng: DEFAULT_APP_LOCALE,
    fallbackLng: DEFAULT_APP_LOCALE,
    supportedLngs: locales,
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
