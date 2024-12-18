/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import stylelint from 'vite-plugin-stylelint';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    stylelint({
      fix: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
  test: {
    browser: {
      enabled: true,
      headless: true,
      name: 'chromium',
      provider: 'playwright',
      screenshotFailures: false,
    },
  },
});
