import { createPinia } from 'pinia'
import { createApp } from 'vue'

// import { createRouter, createWebHistory } from 'vue-router';

// import Products from './components/Products/Products.vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'
// const router = createRouter ({
//   history: createWebHistory(),
//   routes: [{
//     name: 'Home',
//     path: '/',
//     component: 'Home'
//   }]
// });

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
