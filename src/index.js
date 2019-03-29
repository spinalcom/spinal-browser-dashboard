import "babel-polyfill";

import Vue from "vue";
import App from "./app.vue";
import VuePanel from "./plugins/panel/index.js";
import VueBootstrap from 'bootstrap-vue';
import VueNVD3 from 'vue-nvd3';
Vue.use(VueBootstrap);
Vue.use(VueNVD3);

import "../../../.config_env/dashboard";

// import "./openDashboardBtn";

import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/regular.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";


// plugins css
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'nvd3/build/nv.d3.min.css';


// color admin css
import './assets/css/default/style.min.css';
import './assets/css/default/style-responsive.min.css';
import './assets/css/default/theme/default.css';
import './assets/css/style.css';

import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VuePanel);

Vue.use(VueGoogleMaps, {
  load: {
    key: '',
    libraries: 'places'
  }
});

new Vue(App).$mount("#app");
