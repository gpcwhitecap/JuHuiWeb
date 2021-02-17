import { createApp } from 'vue';
import axios from 'axios';
import App from './App.vue';
import '../mock'; // 引用mock

import route from './router/index';

import 'element-plus/lib/theme-chalk/index.css';
import ElementPlus from 'element-plus';

import './index.css';
import './components/less/jh.less';

// require('../mock');
const app = createApp(App);
app.config.globalProperties.$axios = axios;
// app.use(route)
app.use(ElementPlus);
app.use(route);

app.mount('#app');
