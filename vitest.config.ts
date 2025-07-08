/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom', // important pour simuler le DOM
    setupFiles: ['./vitest.setup.ts'], // optionnel pour config globale
  },
});
