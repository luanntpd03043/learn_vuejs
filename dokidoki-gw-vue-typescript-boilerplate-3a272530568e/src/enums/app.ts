export enum StatusCodeEnum {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  ValidationFailed = 422,
  InternalServerError = 500,
  GoneRequest = 410,
  PreconditionFailed = 412,
  PageNotFound = 404,
  AccessTokenExpired = 440,
}

export enum SortType {
  DESC = 'desc',
  ASC = 'asc',
}

export enum InputTypeEnum {
  TEXT = 'text',
  PASSWORD = 'password',
  TEXTAREA = 'textarea',
}

export enum KeyCode {
  ENTER = 'Enter',
}

export enum ToastEnum {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

export enum VariantEnum {
  DEFAULT = 'default',
  DANGER = 'danger',
}

export enum AlertEnum {
  SUCCESS = 'success',
  INFO = 'info',
}

export enum ButtonTypeEnum {
  BUTTON = 'button',
  SUBMIT = 'submit',
}

export enum DialogSizeEnum {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}
