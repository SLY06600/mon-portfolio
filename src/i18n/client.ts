'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import statique des fichiers JSON
import commonFr from '../../public/locales/fr/common.json';
import commonEn from '../../public/locales/en/common.json';

import aboutFr from '../../public/locales/fr/about.json';
import aboutEn from '../../public/locales/en/about.json';

import footerFr from '../../public/locales/fr/footer.json';
import footerEn from '../../public/locales/en/footer.json';

import navbarFr from '../../public/locales/fr/navbar.json';
import navbarEn from '../../public/locales/en/navbar.json';

import projectFr from '../../public/locales/fr/project.json';
import projectEn from '../../public/locales/en/project.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { 
        common: commonFr,
        about: aboutFr,
        footer: footerFr,
        navbar: navbarFr,
        project: projectFr
        },
      en: { 
        common: commonEn,
        about: aboutEn,
        footer: footerEn,
        navbar: navbarEn,
        project: projectEn
    },
     
        
    },
    fallbackLng: 'fr',
    lng: 'fr', // ou détecte la langue ici si tu veux
    interpolation: {
      escapeValue: false,
    },
    debug: false,
    defaultNS: 'common',
  });

export default i18n;
