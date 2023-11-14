import { signIn } from 'api/auth';
import type { StoreOptions } from './types';

const { setAccessToken, setUserInfo } = useCookies();

const actions: StoreOptions['actions'] = {
  async signIn(
    data: Auth.UserCertificate,
    callback: App.Callback,
  ): Promise<void> {
    const onSuccess = get(callback, 'onSuccess', noop);
    const onFailure = get(callback, 'onFailure', noop);
    const onFinish = get(callback, 'onFinish', noop);

    try {
      const response = await signIn(data);
      setAccessToken(response.token);
      setUserInfo(response.user);
      onSuccess();
    } catch (error) {
      onFailure(error);
    } finally {
      onFinish();
    }
  },
};

export default actions;
