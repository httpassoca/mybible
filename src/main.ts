import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/main.sass";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  CoMenu,
  FaBible,
  FaUserCircle,
  OiChevronDown,
  OiChevronUp,
} from "oh-vue-icons/icons";
addIcons(CoMenu, FaUserCircle, OiChevronDown, OiChevronUp, FaBible);

const app = createApp(App);

app.component("VIcon", OhVueIcon);
app.use(createPinia());
app.use(router);

app.mount("#app");
