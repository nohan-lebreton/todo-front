import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: 'My PWA',
        short_name: 'PWA',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '16x16 32x32 48x48 64x64',
            type: 'image/x-icon',
          },
        ],
      },
      // Optionnel : configurez d'autres paramètres PWA ici
    }),
  ],
});
