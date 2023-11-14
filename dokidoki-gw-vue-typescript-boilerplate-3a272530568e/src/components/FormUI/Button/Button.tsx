import { ButtonTypeEnum } from 'enums/app';

export default defineComponent({
  name: 'Button',
  props: {
    nativeType: {
      type: String as PropType<ButtonTypeEnum>,
      default: ButtonTypeEnum.BUTTON,
    },
    variant: {
      type: String,
      default: null,
      validation: (value: string): boolean =>
        ['primary', 'warning', 'danger', 'success', 'info'].includes(value),
    },
    size: {
      type: String,
      default: 'default',
      validator: (value: string): boolean =>
        ['large', 'default', 'small'].includes(value),
    },
    id: {
      type: String,
      default: 'button',
    },
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    iconSuffix: {
      type: Boolean,
      default: false,
    },
    look: {
      type: String,
      default: null,
      validator: (value: string): boolean =>
        ['circle', 'round', 'plain', 'text'].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function as PropType<() => void>,
    },
  },

  setup(props) {
    const {
      variant,
      nativeType,
      label,
      icon,
      size,
      iconSuffix,
      look,
      id,
      onClick,
    } = props;

    const { loading, disabled } = toRefs(props);

    const renderIcon = (): JSX.Element => {
      const sizeIcon = size === 'small' ? '16' : '24';
      return <font-icon name={icon} size={sizeIcon} />;
    };

    const classes = classNames({
      ['el-button--position-suffix']: iconSuffix,
      [`is-${look}`]: look,
      [`no-label`]: isEmpty(label),
    });

    return (): JSX.Element => (
      <ElButton
        id={id}
        class={classes}
        type={variant}
        size={size}
        native-type={nativeType}
        disabled={disabled.value}
        loading={loading.value}
        v-slots={
          icon && {
            icon: () => renderIcon(),
          }
        }
        onClick={onClick}
      >
        {label}
      </ElButton>
    );
  },
});
