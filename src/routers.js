import { createRouter, createMemoryHistory } from 'vue-router'
import Upload from './components/Upload.vue'
import About from './components/About.vue'
import Gallery from './components/Gallery.vue'
import View from './components/View.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/upload',
      component: Upload,
    },
    {
      path: "/list",
      component: Gallery,
    },
    {
      name: 'get',
      path: '/get',
      component: View,
      props: true
    },

    // {
    //   path: '/',
    //   component: Upload,
    //   // props: { msg: "Hello" }
    // },
  ]
})

export default router