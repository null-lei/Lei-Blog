import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
// 路由设置
import router from '@/router'
app.use(router)
// 挂载store
import { setupStore } from '@/store'
setupStore(app);

app.mount('#app')

