import 'normalize.css';
import 'element-plus/dist/index.css';
import 'styles/main.scss';

import router from 'config/router';
import i18n from 'config/i18n';

import Application from 'components/Application';
import MasterLayout from 'components/Layouts/MasterLayout';
import GuestLayout from 'components/Layouts/GuestLayout';
import DashboardLayout from 'components/Layouts/DashboardLayout';
import ModalLayout from 'components/Layouts/ModalLayout';
import FontIcon from 'components/FontIcon';

createApp(Application)
  .use(router)
  .use(i18n)
  .use(createPinia())
  .use(ElementPlus)
  .component('MasterLayout', MasterLayout)
  .component('DashboardLayout', DashboardLayout)
  .component('GuestLayout', GuestLayout)
  .component('ModalLayout', ModalLayout)
  .component('FontIcon', FontIcon)
  .mount('#app');
