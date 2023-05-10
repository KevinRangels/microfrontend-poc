import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
// import { useI18n } from "vue-i18n";
import Home from "../Home.vue"
import HomePageDo from "desarrolloOrganizacional/Do";
import routesRemu from "remuneraciones/routesRemu";


const routes = [
    {path: '/', component: Home},
    {path: '/do', component: HomePageDo},
    {
      ...routesRemu,
      path: '/remuneraciones/',
    },
]

const langs = ['cl', 'pe']
const base = langs.filter((item) => item === window.location?.pathname?.split('/')[1])[0]
// const t = useI18n();
// t.locale.value = "en";
console.log('base', base);

const router = createRouter({
  history: createWebHashHistory(),
  base: `${base}/`,
  routes,
})

export default router