import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  resolve: {
    alias: {
      '~': new URL('./src', import.meta.url).pathname
    }
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: false,
        autoSubfolderIndex: true,
        filter: ({ path }) => path.startsWith('/') && !path.startsWith('//')
      },
      pages: [
        { path: '/', prerender: { enabled: true } },
        { path: '/resume', prerender: { enabled: true } },
        { path: '/resume_en', prerender: { enabled: true } }
      ]
    }),
    viteReact(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'ext-link.svg'],
      manifest: {
        name: 'yangerxiao',
        short_name: 'Tristan',
        start_url: '/',
        display: 'minimal-ui',
        background_color: '#1b1f22',
        theme_color: '#7f828d',
        icons: [
          {
            src: '/pwa-icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
