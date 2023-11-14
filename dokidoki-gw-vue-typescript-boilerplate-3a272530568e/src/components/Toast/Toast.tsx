export default defineComponent({
  name: 'Toast',
  props: {
    type: {
      type: String,
      default: 'info',
      validation: (value: string): boolean =>
        ['info', ' success', 'error', 'warning'].includes(value),
    },
    message: {
      type: String,
      default: '',
    },
    closable: {
      type: Boolean,
      default: true,
    },
  },

  setup(props) {
    const { type, message, closable } = props;
    return (): JSX.Element => (
      <ElAlert title={message} type={type} closable={closable} />
    );
  },
});
