import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import {VitePWA} from "vite-plugin-pwa";
// https://vite.dev/config/

//set the root to frontend where index.html is
export default defineConfig({
  root: 'frontend',
  build: {
    //output the build in dist folder
    outDir:  '../dist',
    emptyOutDir: true,
  },
  plugins: [
    react(),
    babel({presets: [reactCompilerPreset()]}),
    VitePWA({
      registerType: 'autoUpdate', //update automatically the service worker when there is a new version
      devOptions:{
        enabled: true // enable pwa in development mode (npm run dev)
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({url}) => url.origin === 'http://localhost:8000',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                //cache api request: max 50 entries for 24 hours, network first
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24,
              },
            },
          },
        ],
      },
      manifest: {
        "short_name": "RAC-HR",
        "name": "RACademic",
        "scope": "/",
        "start_url": ".",
        "display": "standalone",
        "theme_color": "black",
        "background_color": "white",
        "icons": [
          {
            "src": "/rac_192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/rac_512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      }
    })
  ],
})
