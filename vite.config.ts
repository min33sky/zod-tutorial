import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // This is the default value
    // You can omit this
    coverage: {
      reporter: ['text', 'html'],
    },
  },
});
