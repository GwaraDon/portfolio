import Vue from 'vue'
import router from './router'
import './registerServiceWorker'
import 'bootstrap'
import 'bootstrap/scss/bootstrap.scss';
import 'uikit'
import 'uikit/dist/css/uikit.css';
import '../src/styles/style.scss';

import AOS from "aos"
import 'aos/dist/aos.css'

import App from './App.vue'
Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({
      // disable: "phone"
    });
  },
  router,
  render: h => h(App)
}).$mount("#app")