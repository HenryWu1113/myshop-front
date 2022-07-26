import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
// import pinia from './plugins/pinia'
import './assets/main.css'
import 'element-plus/dist/index.css'
import './scss/style.scss'
// import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all"
// import './js/jq.js'
// import './js/all.js'

// gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
// app.use(pinia)
app.mount('#app')
