import { langEn, langJa, DEFAULT_LANGUAGE } from './constants';

export default createI18n({
  legacy: false,
  mode: 'composition',
  locale: DEFAULT_LANGUAGE,
  fallbackLocale: DEFAULT_LANGUAGE,
  messages: {
    en: langEn,
    ja: langJa,
  },
});
