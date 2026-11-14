import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// JSON fayllarni import qilish
import uzTranslation from './uz.json';
import enTranslation from './en.json';

const resources = {
  uz: {
    translation: uzTranslation
  },
  en: {
    translation: enTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "uz", // Boshlang'ich til O'zbek tili
    fallbackLng: "en",
    interpolation: { 
      escapeValue: false 
    }
  });

export default i18n;