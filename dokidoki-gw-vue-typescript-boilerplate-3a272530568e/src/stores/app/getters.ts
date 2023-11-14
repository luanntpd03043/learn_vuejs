import type { State, StoreOptions } from './types';

const getters: StoreOptions['getters'] = {
  currentLanguage: (state: State): string => state.locale,
};

export default getters;
