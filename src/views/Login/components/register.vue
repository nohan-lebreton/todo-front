<template>
    <div>
      <h1>Register</h1>
      <form @submit.prevent="handleRegister">
        <input type="text" v-model="username" placeholder="Username" required />
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useAuthStore } from '../authStore';
  
  export default {
    setup() {
      const username = ref('');
      const email = ref('');
      const password = ref('');
      const errorMessage = ref('');
      const authStore = useAuthStore();
  
      const handleRegister = async () => {
        errorMessage.value = '';
        try {
          await authStore.register({ username: username.value, email: email.value, password: password.value });
          // Rediriger ou afficher un message de succès
        } catch (error) {
          errorMessage.value = 'Registration failed. Please try again.';
        }
      };
  
      return { username, email, password, handleRegister, errorMessage };
    },
  };
  </script>
  