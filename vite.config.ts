import { defineConfig } from 'vite'
import path from "path"

export default defineConfig({
  base: "",
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === "es" ? "m" : "c"}js`
    },
    sourcemap: false,
    rollupOptions: {
      external: ['electron', 'fs', 'path', 'os', 'crypto', 'child_process', 'http', 'net']
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src"),
      '@/*': path.resolve(__dirname, 'src/*')
    }
  },
  plugins: []
})
