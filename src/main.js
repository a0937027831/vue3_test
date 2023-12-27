import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import lodash from 'lodash';

const app = createApp(App)

app.config.globalProperties._ = lodash;

app.use(createPinia())
app.use(router)

app.mount('#app')
