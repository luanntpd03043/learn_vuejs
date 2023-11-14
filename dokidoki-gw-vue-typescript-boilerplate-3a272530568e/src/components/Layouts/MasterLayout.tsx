import { RESOURCES } from 'config/constants';

export default defineComponent({
  setup(props, { slots }) {
    useFavicon(RESOURCES.FAVICON);

    return (): JSX.Element => (
      <main class="master-layout">{slots.default()}</main>
    );
  },
});
