import { anu } from 'anu-vue'
import { createApp } from 'vue'
import App from './App.vue'

// UnoCSS import
import 'uno.css'

// import styles
import 'anu-vue/dist/style.css'


createApp(App).use(anu).mount('#app')
