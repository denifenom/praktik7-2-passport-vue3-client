import { createApp } from 'vue' //Default
import App from './App.vue' //Default

//Manual
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'

//Manual
import router from './router'

// createApp(App).mount('#app') //Default
const app = createApp(App)

app.use(router)

app.mount('#app')