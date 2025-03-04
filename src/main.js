import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from '@/router';
import '@/assets/css/styles.scss';

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount('#app');
