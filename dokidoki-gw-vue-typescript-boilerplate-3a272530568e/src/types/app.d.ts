declare namespace App {
  import('vue');
  import('enums/toast');

  import { PositionEnum } from 'enums/toast';

  // eslint-disable-next-line
  type Any = any;

  type RouteContext = {
    to: RouteLocationNormalizedLoaded;
    from: RouteLocationNormalizedLoaded;
    next: NavigationGuardNext;
    user: Auth.User;
    isLoggedIn: boolean;
  };

  type RouteMetaMiddleware = (...args: unknown[]) => boolean;

  type GlobalLocale = 'en' | 'ja';

  export type Callback = {
    onSuccess?: (...args) => void;
    onFailure?: (...args) => void;
    onFinish?: (...args) => void;
  };

  export type ResponseError = {
    message: string;
    errors: Record<string, Record<string, ErrorValue>>;
    status?: number;
  };

  export type MessageError = ResponseError['errors'];

  export type CheckboxGroup = {
    label: string;
    value: string;
    disabled?: boolean;
    color?: string;
  };

  export type Radio = {
    label: string;
    value: string;
    disabled?: boolean;
  };

  export type ToastPosition = BuildPropType<
    StringConstructor,
    | PositionEnum.TopRight
    | PositionEnum.TopLeft
    | PositionEnum.BottomLeft
    | PositionEnum.BottomRight
  >;

  export type ToastProps = {
    closable?: boolean;
    position?: ToastPosition;
    customClass?: string;
  };

  export type DropdownOption = {
    label?: string;
    icon?: string;
    value?: string | number | boolean;
  };
}
