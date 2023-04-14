import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        name: "counter",
        entryFileNames: "Counter.js",
      },
    },
  },
});
