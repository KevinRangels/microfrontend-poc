import { createApp } from "vue";
import { createPinia } from 'pinia'
// import i18n from "./plugin/i18n"

import "./index.css";

import App from "./App.vue";

const pinia = createPinia()
const app = createApp(App)


app.use(pinia)
// app.use(i18n)
app.mount('#app')
