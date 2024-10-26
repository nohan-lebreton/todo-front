import { createApp } from 'vue'
import App from './App.vue'
import router from './router';  // Importez le routeur
import { createPinia } from 'pinia';
const app = createApp(App);

app.use(router);  // Utilisez le routeur
app.use(createPinia());  // Utilisez Pinia pour l'état

createApp(App).mount('#app')
