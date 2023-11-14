export default defineComponent({
  name: 'DashboardLayout',
  setup(props, { slots }) {
    return (): JSX.Element => (
      <master-layout>
        <div class="dashboard-layout">{slots.default()}</div>
      </master-layout>
    );
  },
});
