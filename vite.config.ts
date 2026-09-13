import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const country = process.env.VITE_COUNTRY || 'KE'
const outDir = country === 'KE' ? 'dist' : `dist-${country.toLowerCase()}`

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: { outDir },
})
