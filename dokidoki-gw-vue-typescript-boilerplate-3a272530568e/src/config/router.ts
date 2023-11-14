import { middlewarePipeline, auth } from './middlewares';
import guestRoutes from './routes/guest-routes';

const HomePage = () => import('pages/HomePage');
const DashboardPage = () => import('pages/DashboardPage');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DashboardPage,
      meta: {
        middleware: [auth],
      },
      children: [
        {
          path: '/home',
          name: 'Home',
          component: HomePage,
          meta: {
            middleware: [auth],
          },
        },
      ],
    },
    ...guestRoutes,
  ],
});

router.beforeEach((to, from, next) => {
  const middlewares = get(
    to.meta,
    'middleware',
  ) as Array<App.RouteMetaMiddleware>;

  if (!middlewares) {
    return next();
  }

  const { getUserInfo, isAuthenticated } = useCookies();

  const middleware = head(middlewares);
  const isLoggedIn = isAuthenticated();
  const context: App.RouteContext = {
    to,
    from,
    next,
    user: getUserInfo(),
    isLoggedIn,
  };

  return middleware({
    ...context,
    next: middlewarePipeline(context, middlewares, 1),
  });
});

export default router;
