import { guest } from 'config/middlewares';

const SignInPage = () => import('pages/SignInPage');
const PageNotFound = () => import('pages/PageNotFound');

export default [
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignInPage,
    meta: {
      middleware: [guest],
    },
  },
  { path: '/:catchAll(.*)', name: 'PageNotFound', component: PageNotFound },
];
