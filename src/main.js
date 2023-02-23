import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";
import { network } from "./network/request";

createApp(App).use(router).mount('#app')

// const app = createApp(App)
// app.use(router)
// app.mount('#app')
