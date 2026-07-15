import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
// Für GitHub Pages (Projekt-Site mk169.github.io/Oremus/) wird beim Build der
// Basispfad /Oremus/ gesetzt (exakt wie der Repo-Name, GitHub Pages ist
// case-sensitiv); im Dev-Server bleibt es der Wurzelpfad.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Oremus/' : '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icon.svg'],
      manifest: {
        name: 'Oremus – Gebet, Liturgie & Stundenbuch',
        short_name: 'Oremus',
        description:
          'Katholische App für Gebet, Liturgie und Stundenbuch – 1962 und Novus Ordo.',
        theme_color: '#6B1F2A',
        background_color: '#F4ECD8',
        display: 'standalone',
        lang: 'de',
        icons: [
          {
            src: 'icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
}))
