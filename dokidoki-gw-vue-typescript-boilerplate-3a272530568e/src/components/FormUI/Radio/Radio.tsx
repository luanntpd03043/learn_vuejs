export default defineComponent({
  name: 'Radio',
  props: {
    name: {
      type: String,
      default: 'name',
    },
    options: {
      type: Array as PropType<App.Radio[]>,
      default: [],
    },
    size: {
      type: String,
      default: 'default',
      validator: (value: string) => {
        return ['small', 'default'].includes(value);
      },
    },
    direction: {
      type: String,
      default: 'vertical',
      validator: (value: string) => {
        return ['vertical', 'horizontal'].includes(value);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    onChange: {
      type: Function as PropType<(value: string) => void>,
    },
  },
  setup(props, { attrs, emit }) {
    const { name, size, options, disabled, direction, onChange } = props;

    const onChangeValue = (value: string): void => {
      emit(UPDATE_MODEL_EVENT, value);
      if (onChange) {
        onChange(value);
      }
    };

    return (): JSX.Element => (
      <ElRadioGroup
        {...attrs}
        class={`el-radio-group--${direction}`}
        name={name}
        disabled={disabled}
        onChange={onChangeValue}
      >
        {map(options, (option: App.Radio, index: number) => (
          <ElRadio
            size={size}
            key={index}
            disabled={option.disabled}
            label={option.value}
          >
            {option.label}
          </ElRadio>
        ))}
      </ElRadioGroup>
    );
  },
});
