import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    async register(userData) {
      try {
        const response = await axios.post('https://todo-backend-j3ql.onrender.com/register', userData);
        this.user = response.data.user;
        this.token = response.data.token;
      } catch (error) {
        console.error('Registration failed:', error);
        throw error;
      }
    },
    async login(credentials) {
      try {
        const response = await axios.post('https://todo-backend-j3ql.onrender.com/login', credentials);
        this.user = response.data.user;
        this.token = response.data.token;
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },
    logout() {
      this.user = null;
      this.token = null;
    },
  },
});
