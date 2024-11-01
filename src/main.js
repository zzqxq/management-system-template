import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // 导入路由
import { createPinia } from 'pinia'; // 导入 Pinia

import "@/style/index.scss"; // 导入全局样式

const app = createApp(App)
const pinia = createPinia(); // 创建 Pinia

app.use(router) // 使用路由
app.use(pinia) // 使用 Pinia

app.mount('#app')
