import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true, include: ['lib']})],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ui-design-system",
      fileName: (format) => `index.${format}.js`,
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return "ui-design-system.css"
          return assetInfo.name;
        }
      },
    },
  },
  optimizeDeps: {
    include: ["./src/styles/index.scss"],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "sass:color";`
      }
    }
  }
})
