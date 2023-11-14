export type Store = StoreDefinition<string, State, Getters, Actions>;
export type StoreOptions = DefineStoreOptions<string, State, Getters, Actions>;

export type State = {
  locale: string;
};

export interface Getters {
  currentLanguage(state: State): string;
}

export interface Actions {
  changeLanguage(lang: string): void;
  reset(): void;
}
