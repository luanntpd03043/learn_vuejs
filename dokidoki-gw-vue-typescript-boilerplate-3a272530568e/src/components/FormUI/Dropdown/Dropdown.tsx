export default defineComponent({
  name: 'Dropdown',
  props: {
    inForm: {
      type: Boolean,
      default: true,
    },
    options: {
      type: Array as PropType<App.DropdownOption[]>,
      default: [],
    },
    size: {
      type: String,
      default: 'default',
      validator: (value: string): boolean =>
        ['large', 'default', 'small'].includes(value),
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    isRemote: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: 'type',
    },
    id: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    searchable: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    searchEmptyText: {
      type: String,
      default: '',
    },
    emptyText: {
      type: String,
      default: '',
    },
    onChange: {
      type: Function as PropType<() => void>,
      default: (): void => {
        //
      },
    },
    onSearch: {
      type: Function as PropType<(qr: string) => void>,
      default: (): void => {
        //
      },
    },
  },
  /* eslint-disable-next-line max-lines-per-function */
  setup(props, { attrs }) {
    const {
      inForm,
      multiple,
      size,
      isRemote,
      label,
      name,
      id,
      searchable,
      clearable,
      emptyText,
      searchEmptyText,
      onChange,
      onSearch,
    } = props;

    const options = toRef(props, 'options');
    const disabled = toRef(props, 'disabled');
    const isTouched = ref(false);
    const isFilling = ref(false);
    const searchKey = ref('');
    const modelValue = computed(() => attrs['modelValue'] as string);
    const filteredOptions = computed<App.DropdownOption[]>(() => {
      if (searchKey.value) {
        return options.value.filter((option) =>
          option.label.toLowerCase().includes(searchKey.value),
        );
      }
      return options.value;
    });
    const hasValue = computed<boolean>(() => isBoolean(modelValue.value));
    const selectId = id || useId().value;

    const onBlur = (): void => {
      isTouched.value = false;
      searchKey.value = '';
    };

    const onFocus = (): void => {
      isTouched.value = true;
      isFilling.value = false;
    };

    const onVisibleChange = (status: boolean): void => {
      if (!status) {
        onChange();
        onBlur();
      }
      isTouched.value = status;
    };

    const onClear = (): void => {
      isTouched.value = false;
      onChange();
    };

    const renderOption = (option: App.DropdownOption): JSX.Element => {
      if (multiple) {
        return (
          <ElOption value={option.value} label={option.label}>
            <span class="el-select-dropdown__checkbox">{option.label}</span>
          </ElOption>
        );
      }
      return <ElOption value={option.value} label={option.label} />;
    };

    const remoteMethod = (query: string): void => {
      if (onSearch) {
        onSearch(query);
      }
    };

    const renderDropdown = (): JSX.Element => (
      <div
        class={[
          'dropdown-component',
          { focused: isTouched.value },
          { filled: isFilling.value || hasValue.value },
        ]}
      >
        <ElSelect
          multiple={multiple}
          size={size}
          id={selectId}
          name={name}
          clear-icon={() => (
            <font-icon name="remove-circle" size="16" color="bombay" />
          )}
          suffix-icon={() => (
            <font-icon name="arrow-sm-down" size="16" color="bombay" />
          )}
          disabled={disabled.value}
          filterable={searchable}
          clearable={clearable}
          noDataText={emptyText}
          noMatchText={searchEmptyText}
          onFocus={onFocus}
          onClear={onClear}
          fit-input-width
          placeholder={label}
          remote={isRemote}
          remote-method={remoteMethod}
          filter-method={(search: string) => {
            if (searchable) {
              searchKey.value = search.trim().toLowerCase();
            }
          }}
          onVisibleChange={onVisibleChange}
          {...attrs}
        >
          {filteredOptions.value.map((option) => renderOption(option))}
        </ElSelect>
      </div>
    );

    if (inForm) {
      return (): JSX.Element => (
        <ElFormItem label={label} prop={name}>
          {renderDropdown()}
        </ElFormItem>
      );
    }

    return (): JSX.Element => renderDropdown();
  },
});
