import { createRouter, createMemoryHistory } from 'vue-router'
import Home from './components/HelloWorld.vue'
import Upload from './components/Upload.vue'
import About from './components/About.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      props: { msg: "Hello" }
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/upload',
      component: Upload,
    }
  ]
})

export default router