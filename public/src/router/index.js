import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import About from '../components/About.vue'
import Write from '../components/Write.vue'
import List from '../components/List.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/write',
      name: 'Write',
      component: Write
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
