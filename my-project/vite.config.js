import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        project: './the-project.html'
      }
    }
  },
  server: {
    fs: {
      allow: ['..']
    }
  }
})
