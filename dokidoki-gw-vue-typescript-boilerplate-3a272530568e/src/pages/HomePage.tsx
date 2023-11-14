import HomeContainer from 'containers/HomeContainer';

export default defineComponent({
  setup() {
    const { t } = useI18n();

    return (): JSX.Element => <HomeContainer />;
  },
});
