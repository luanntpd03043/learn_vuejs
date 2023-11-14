export const logOut = (): Promise<void> =>
  useHttpRequest({ url: '/auth/logout', method: 'DELETE' });

export const signIn = (data: Auth.UserCertificate): Promise<void> =>
  useHttpRequest({ url: '/auth/sign-in', method: 'POST', data });
