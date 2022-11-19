import  {createApp} from 'vue';
import App from './App.vue';

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import router from "./router";

// import { BootstrapVue, IconsPlugin, TablePlugin  } from 'bootstrap-vue'
// import Bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// const app = Vue.createApp({
//     router,
//     BootstrapVue,
//     IconsPlugin,

// })
// app.mount('#app')


createApp(App).use(router).mount('#app');
// createApp(App).use(BootstrapVue);
// createApp(App).use(Bootstrap);
// createApp(App).use(IconsPlugin);
// createApp(App).use(TablePlugin);

// var App = BootstrapVue();
// var App = IconsPlugin();
