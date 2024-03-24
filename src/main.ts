import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-dark-green/theme.css'
import 'primeflex/primeflex.css'
import App from './App.vue'

const app = createApp(App);
app.use(PrimeVue)
app.mount('#app');
