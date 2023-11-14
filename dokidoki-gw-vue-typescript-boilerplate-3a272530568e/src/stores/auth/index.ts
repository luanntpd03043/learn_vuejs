import initialState from './state';
import getters from './getters';
import actions from './actions';
import type { Store } from './types';

export default defineStore({
  id: 'auth',
  state: initialState,
  getters,
  actions,
}) as Store;
