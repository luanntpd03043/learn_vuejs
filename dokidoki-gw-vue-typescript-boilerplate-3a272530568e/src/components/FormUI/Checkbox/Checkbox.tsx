export default defineComponent({
  name: 'Checkbox',
  props: {
    name: {
      type: String,
      default: 'name',
    },
    checked: {
      type: Boolean,
      default: false,
    },
    fill: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'default',
      validator(value: string) {
        return ['large', 'default'].includes(value);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
    onChange: {
      type: Function as PropType<(value: boolean) => void>,
    },
  },

  setup({ name, size, disabled, checked, label, fill, onChange }) {
    return (): JSX.Element => (
      <ElCheckbox
        name={name}
        label={label}
        size={size}
        border={fill}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
    );
  },
});
