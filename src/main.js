import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import '../mock'  //引用mock

// import route from './route'

import ElementPlus from 'element-plus';

import './index.css'
import './components/less/jh.less'

// require('../mock');
let app = createApp(App)
app.config.globalProperties.$axios = axios
// app.use(route)
app.use(ElementPlus)

app.mount('#app')
