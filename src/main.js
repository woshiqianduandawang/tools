import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";
import Network from "./network/request";

const app = createApp(App)
app.config.globalProperties.$Network = Network
// app.use(Network)
app.use(router)
app.mount('#app')
