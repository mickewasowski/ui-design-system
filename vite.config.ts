import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {libInjectCss} from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss(),  dts({ insertTypesEntry: true, include: ["lib"] })],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ui-design-system",
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/tsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  optimizeDeps: {
    include: ["./src/styles/index.scss"],
  },
});
