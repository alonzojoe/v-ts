import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-dark-green/theme.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import router from '@/router'

const app = createApp(App);
app.use(PrimeVue)
app.use(router)
app.mount('#app');
