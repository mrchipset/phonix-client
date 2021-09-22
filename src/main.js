// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
// import HelloWorld from './components/HelloWorld.vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import router from './routers'

// 1. Define route components.
// These can be imported from other files


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.

// Vue.use(VueRouter)

const app = createApp(App)
app.use(VueSidebarMenu)
app.use(router)
app.mount('#app')