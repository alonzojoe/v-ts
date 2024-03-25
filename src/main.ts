import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-dark-green/theme.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

const app = createApp(App);
app.use(PrimeVue)
app.use(router)
app.use(store)
app.mount('#app');
