import './bootstrap';
import { createApp } from 'vue'
import App from '../src/App.vue'
import routes from './routes.js'
// import './assets/main.css'

createApp(App).use(routes).mount('#app');
