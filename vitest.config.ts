import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    coverage: {
      provider: 'c8',
      reporter: ['text', 'lcov', 'html'],
    },
    environment: 'happy-dom',
    restoreMocks: true,
  },
})
