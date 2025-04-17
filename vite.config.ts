import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr({
            include: '**/*.svg',

            esbuildOptions: {},

            extendWebpackConfig(config) {
                config.module.rules.push({
                    test: /\.(png|jpg|jpeg|gif|webp)$/i,
                    type: 'asset/resource',
                });
                return config;
            },
        }),
    ],
});
