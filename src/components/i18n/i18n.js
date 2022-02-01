import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locale/en/translation.json';
import tr from './locale/tr/translation.json';


i18n.use(initReactI18next).init({
  resources: {
    en,
    tr,
  },
  fallbackLng: 'tr',
  // debug only when not in production
  debug: process.env.NODE_ENV !== 'production',
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: true,
  },
});

export default i18n;