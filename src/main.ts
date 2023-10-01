import { createApp } from 'vue'
import './style.css'
import router from './app.router'
import store from './store'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/bootstrap4-light-blue/theme.css";

createApp(App)
.use(PrimeVue, {
    ripple: true ,
   inputStyle: "filled" 
})
.use(router)
.use(store)
.mount('#app')
