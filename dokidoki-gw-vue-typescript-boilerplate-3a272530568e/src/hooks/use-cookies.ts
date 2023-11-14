import UniversalCookie from 'universal-cookie';

let cookie: UniversalCookie = null;

// eslint-disable-next-line max-lines-per-function
export default function useCookies() {
  if (!cookie) {
    cookie = new UniversalCookie();
  }

  const cookies = useUniversalCookie(['token', 'userInfo'], {}, cookie);

  const options = { path: '/' };

  const getAccessToken = (): string => {
    return cookies.get('token');
  };

  const getUserInfo = (): Auth.User => {
    return cookies.get('userInfo');
  };

  const setUserInfo = (data: Auth.User): void => {
    cookies.set('userInfo', data, options);
  };

  const setAccessToken = (token: string): void => {
    cookies.set('token', token, options);
  };

  const revokeUser = (): void => {
    cookies.remove('token', options);
    cookies.remove('userInfo', options);
  };

  const isAuthenticated = (): boolean => {
    return Boolean(getUserInfo() && getAccessToken());
  };

  return {
    getUserInfo,
    revokeUser,
    isAuthenticated,
    setUserInfo,
    setAccessToken,
    getAccessToken,
  };
}
