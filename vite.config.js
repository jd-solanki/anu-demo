import Unocss from 'unocss/vite'
import { fileURLToPath, URL } from 'url'

import vue from '@vitejs/plugin-vue'
import { AnuComponentResolver } from 'anu-vue'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
    Components({
      resolvers: [
        AnuComponentResolver()
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
