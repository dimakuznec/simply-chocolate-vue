import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import Products from './components/Products/Products.vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// import { header } from 'vue-router'

const header = { template: '<div>header</div>' }
const Products = { template: '<div>Products</div>' }

const routes = [
  { path: '/', component: header },
  { path: '/Products', component: Products },
]



const app = createApp(App)


app.use(createPinia())
app.use(router)

app.mount('#app')
