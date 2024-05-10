import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.ts'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      // para testear
      environment: 'jsdom',
      // archivo para configuarcion de tests
      setupFiles: './tests/setup.ts'
    }
  })
)
