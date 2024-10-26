import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/home.vue';
import Register from '../views/Login/components/register.vue';
import Login from '../views/Login/components/login.vue';

// Définissez vos routes ici
const routes = [
  { path: '/', component: Home },         // Route pour la page d'accueil
  { path: '/register', component: Register }, // Route pour l'enregistrement
  { path: '/login', component: Login },       // Route pour la connexion
];

// Créez une instance du routeur
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
