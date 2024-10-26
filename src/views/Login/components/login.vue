<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useAuthStore } from '../authStore';
  
  export default {
    setup() {
      const email = ref('');
      const password = ref('');
      const errorMessage = ref('');
      const authStore = useAuthStore();
  
      const handleLogin = async () => {
        errorMessage.value = '';
        try {
          await authStore.login({ email: email.value, password: password.value });
          // Rediriger ou afficher un message de succès
        } catch (error) {
          errorMessage.value = 'Login failed. Please check your credentials.';
        }
      };
  
      return { email, password, handleLogin, errorMessage };
    },
  };
  </script>
  