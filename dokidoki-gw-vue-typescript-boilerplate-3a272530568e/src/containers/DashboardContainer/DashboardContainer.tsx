export default defineComponent({
  setup() {
    const router = useRouter();
    const currentRoute = useRoute();

    if (!currentRoute.name) {
      router.push({ name: 'Home' });
    }

    return () => (
      <dashboard-layout>
        <router-view />
      </dashboard-layout>
    );
  },
});
