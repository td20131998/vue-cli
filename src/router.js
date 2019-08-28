import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: '/about',
          name: 'about',
          component: About,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => (<template><div>This is contact page</div></template>),
          meta: {
            requiresAuth: true
          }
        }
      ]
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
})
