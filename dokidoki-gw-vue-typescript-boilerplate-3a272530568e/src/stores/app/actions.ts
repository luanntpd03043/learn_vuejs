import i18n from 'config/i18n';
import type { StoreOptions } from './types';

const actions: StoreOptions['actions'] = {
  changeLanguage(lang: string): void {
    this.locale = lang;
    i18n.global.locale.value = lang;
  },
  reset(): void {
    this.$reset();
  },
};

export default actions;
