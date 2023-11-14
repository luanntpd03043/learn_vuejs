export default defineComponent({
  name: 'CheckboxGroup',
  props: {
    inForm: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    options: {
      type: Array as PropType<App.CheckboxGroup[]>,
      default: [],
    },
    fill: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'default',
      validator: (value: string) => {
        return ['large', 'default'].includes(value);
      },
    },
    direction: {
      type: String,
      default: 'vertical',
      validator: (value: string) => {
        return ['vertical', 'horizontal'].includes(value);
      },
    },
    onChange: {
      type: Function as PropType<(value: string[]) => void>,
    },
  },
  /* eslint-disable-next-line max-lines-per-function */
  setup(props, { attrs, emit }) {
    const { inForm, name, label, fill, size, direction, options, onChange } =
      props;

    const onChangeValue = (value: string[]): void => {
      emit(UPDATE_MODEL_EVENT, value);
      if (onChange) {
        onChange(value);
      }
    };

    const renderLabel = (label: string, color: string): JSX.Element => {
      if (color) {
        return (
          <span class="has-circle">
            {label} <span class={`has-circle--${color}`} />
          </span>
        );
      }
      return <>{label}</>;
    };

    const renderContent = (): JSX.Element => {
      return (
        <ElCheckboxGroup
          {...attrs}
          class={`el-checkbox-group--${direction}`}
          name={name}
          onChange={onChangeValue}
          size={size}
        >
          {map(options, (option, index) => (
            <ElCheckbox
              name={name}
              key={index}
              label={option.value}
              disabled={option.disabled}
              border={fill}
              v-slots={{
                default: () => renderLabel(option.label, option.color),
              }}
            />
          ))}
        </ElCheckboxGroup>
      );
    };

    if (inForm) {
      return (): JSX.Element => (
        <ElFormItem prop={name} label={label}>
          {renderContent()}
        </ElFormItem>
      );
    }

    return (): JSX.Element => renderContent();
  },
});
