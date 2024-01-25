// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';

i18n
    .use(RNLanguageDetector)
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        supportedLngs: ['en', 'es'],
        ns: [],
        defaultNS: undefined,
        resources: {
            en: {
                common: require('./locales/en/common.json'),
            },
            es: {
                common: require('./locales/es/common.json'),
            },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
