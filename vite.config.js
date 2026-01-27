import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@pages': resolve(__dirname, './src/pages'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@utils': resolve(__dirname, './src/utils'),
      '@config': resolve(__dirname, './src/config'),
      '@assets': resolve(__dirname, './src/assets'),
    },
  },
  server: {
    port: 3000,
    strictPort: false,
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['sonner'],
          store: ['zustand'],
          http: ['axios'],
        },
      },
    },
  },
  define: {
    __APP_TITLE__: JSON.stringify(
      process.env.VITE_APP_TITLE || 'English Learn - A1 Beginner Course'
    ),
    __APP_VERSION__: JSON.stringify(process.env.VITE_APP_VERSION || '1.0.0'),
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
});

