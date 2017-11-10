// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import TopBar from '@/components/TopBar'
import Modal from '@/components/Modal'
import Login from '@/components/Login'
import Err from '@/components/Error'

import { store } from '@/store/store';

Vue.component('TopBar', TopBar);
Vue.component('Modal', Modal);
Vue.component('Login', Login);
Vue.component('Err', Err);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
