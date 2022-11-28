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
  OiChevronLeft,
  OiChevronRight,
  OiChevronUp,
} from "oh-vue-icons/icons";
addIcons(
  CoMenu,
  FaBible,
  FaUserCircle,
  OiChevronDown,
  OiChevronLeft,
  OiChevronRight,
  OiChevronUp
);

const app = createApp(App);

app.component("VIcon", OhVueIcon);
app.use(createPinia());
app.use(router);

app.mount("#app");
