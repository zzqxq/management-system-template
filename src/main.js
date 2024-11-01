import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 导入路由
import { createPinia } from 'pinia'; // 导入 Pinia
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import 'dayjs/locale/zh-cn';
import '@/style/index.scss'; // 导入全局样式

const app = createApp(App);
const pinia = createPinia(); // 创建 Pinia

app.use(router); // 使用路由
app.use(pinia); // 使用 Pinia
app.use(ElementPlus, {
  locale: zhCn,
}); // 使用 ElementPlus 中文

app.mount('#app');
