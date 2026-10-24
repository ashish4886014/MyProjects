import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'   //! its changes

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()],    //! its changee
})


