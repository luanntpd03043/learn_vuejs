export default defineComponent({
  setup(props, { slots }) {
    return (): JSX.Element => (
      <master-layout>
        <div class="guest-layout">{slots.default()}</div>
      </master-layout>
    );
  },
});
