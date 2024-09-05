import './assets/main.css'
import App from './App.vue'

import { createApp } from 'vue'
import router from './router'
import VueFeather from 'vue-feather'
const app = createApp(App)

app.use(router)

app.component(VueFeather.name, VueFeather)
app.mount('#app')
