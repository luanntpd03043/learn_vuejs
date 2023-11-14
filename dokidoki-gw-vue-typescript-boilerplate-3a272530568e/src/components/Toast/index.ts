import Toast from './Toast';

function toast(message: string, type: string, props: App.ToastProps = {}) {
  const {
    closable,
    position = 'bottom-left',
    customClass = 'el-notification--center',
  } = props;
  const config = {
    dangerouslyUseHTMLString: true,
    duration: 5000,
    showClose: false,
    position,
    customClass,
  };

  ElNotification({
    ...config,
    message: h(Toast, {
      type: type,
      closable: closable,
      message: message,
    }),
  });
}

export function showSuccess(message: string, props?: App.ToastProps) {
  toast(message, 'success', props);
}

export function showError(message: string, props?: App.ToastProps) {
  toast(message, 'error', props);
}

export function showWarning(message: string, props?: App.ToastProps) {
  toast(message, 'warning', props);
}

export function showInfo(message: string, props?: App.ToastProps) {
  toast(message, 'info', props);
}
