import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), cssInjectedByJsPlugin()],
    build: {
        target: 'esnext',
        rollupOptions: {
            input: { pageOne: 'src/containers/PageOne.tsx', pageTwo: 'src/containers/PageTwo.tsx' },
            output: {
                name: 'app',
                entryFileNames: 'app.js',
            },
        },
    },
});
