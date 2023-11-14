import { DEFAULT_LANGUAGE } from 'config/constants';
import type { State } from './types';

export default (): State => ({
  locale: DEFAULT_LANGUAGE,
});
