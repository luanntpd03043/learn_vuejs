export type Store = StoreDefinition<string, State, Getters, Actions>;
export type StoreOptions = DefineStoreOptions<string, State, Getters, Actions>;

export type State = {};

export interface Getters {}

export interface Actions {
  signIn(data: Auth.UserCertificate, callback: App.Callback): Promise<void>;
}
