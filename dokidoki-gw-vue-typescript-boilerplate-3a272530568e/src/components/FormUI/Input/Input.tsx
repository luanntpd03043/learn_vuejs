import { InputTypeEnum } from 'enums/app';

export default defineComponent({
  name: 'Input',
  props: {
    inForm: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String as PropType<InputTypeEnum>,
      default: InputTypeEnum.TEXT,
    },
    size: {
      type: String,
      default: 'large',
      validator: (value: string): boolean =>
        ['large', 'default', 'small'].includes(value),
    },
    name: {
      type: String,
      default: 'name',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    minRows: {
      type: Number,
      default: 2,
    },
    maxRows: {
      type: Number,
      default: 4,
    },
    maxlength: {
      type: Number,
      default: 255,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    onChange: {
      type: Function as PropType<(value: string) => void>,
    },
  },
  /* eslint-disable-next-line max-lines-per-function */
  setup(props, { attrs, emit, slots }) {
    const {
      inForm,
      type,
      size,
      disabled,
      name,
      label,
      clearable,
      minRows,
      maxRows,
      maxlength,
      placeholder,
      onChange,
    } = props;
    const isFilling = ref(false);
    const isShowPassword = ref(false);
    const isFocused = ref(false);
    const modelValue = computed(() => attrs['modelValue'] as string);
    const hasValue = computed<boolean>(() => isBoolean(modelValue.value));
    const isTypePassword = computed<boolean>(
      () => type === InputTypeEnum.PASSWORD,
    );
    const inputType = computed<InputTypeEnum>(() =>
      isShowPassword.value ? InputTypeEnum.TEXT : type,
    );

    const onBlur = (): void => {
      isFilling.value = false;
      if (!hasValue.value) {
        isFocused.value = false;
      }
    };

    const onFocus = (): void => {
      isFocused.value = true;
    };

    const onChangeValue = (value: string): void => {
      emit(UPDATE_MODEL_EVENT, value);
      isFocused.value = true;
      isFilling.value = true;
      if (onChange) {
        onChange(value);
      }
    };

    const onClear = (): void => {
      emit(UPDATE_MODEL_EVENT, '');
      emit(CHANGE_EVENT, '');
      emit(INPUT_EVENT, '');
    };

    const handleShowPassword = (): void => {
      isShowPassword.value = !isShowPassword.value;
    };

    const renderIcon = (): JSX.Element => (
      <>
        {isTypePassword.value && (
          <font-icon
            class="remove-icon"
            size="16"
            color={isShowPassword.value ? 'blue-zodiac' : 'bombay'}
            name={isShowPassword.value ? 'view' : 'hide'}
            cursor
            onClick={handleShowPassword}
          />
        )}
        {type === InputTypeEnum.TEXTAREA && !disabled && hasValue.value && (
          <font-icon
            class="remove-icon"
            size="16"
            color="bombay"
            name="remove-circle"
            cursor
            onClick={onClear}
          />
        )}
      </>
    );

    const renderInput = (): JSX.Element => {
      return (
        <div
          class={[
            'input-component',
            { focused: hasValue.value || isFocused.value },
            { disabled: disabled },
            { filled: isFilling.value },
          ]}
        >
          <ElInput
            {...attrs}
            name={name}
            disabled={disabled}
            size={size}
            type={inputType.value}
            placeholder={placeholder || label}
            clearable={clearable && !isTypePassword.value}
            onFocus={onFocus}
            onBlur={onBlur}
            onInput={(value: string) => onChangeValue(value)}
            autosize={{ minRows: minRows, maxRows: maxRows }}
            maxlength={maxlength}
            v-slots={{
              prefix: slots.prefix,
              suffix: slots.suffix,
            }}
          />
          {renderIcon()}
        </div>
      );
    };

    if (inForm) {
      return (): JSX.Element => (
        <ElFormItem prop={name} label={label}>
          {renderInput()}
        </ElFormItem>
      );
    }

    return (): JSX.Element => renderInput();
  },
});
