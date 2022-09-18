import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.sass'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoMenu, FaUserCircle } from "oh-vue-icons/icons";
addIcons(CoMenu, FaUserCircle);


const app = createApp(App)

app.component("v-icon", OhVueIcon);
app.use(createPinia())
app.use(router)

app.mount('#app')
