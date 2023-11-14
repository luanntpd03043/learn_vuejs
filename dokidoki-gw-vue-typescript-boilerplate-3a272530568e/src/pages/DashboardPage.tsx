import DashboardContainer from 'containers/DashboardContainer';

export default defineComponent({
  setup() {
    const { t } = useI18n();

    useTitle(t('dashboard'));

    return (): JSX.Element => <DashboardContainer />;
  },
});
