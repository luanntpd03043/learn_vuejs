import SignInContainer from 'containers/SignInContainer';

export default defineComponent({
  setup() {
    const { t } = useI18n();

    useTitle(t('sign_in'));

    return (): JSX.Element => <SignInContainer />;
  },
});
