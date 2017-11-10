import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Form from '@/pages/Form'
import Play from '@/pages/Play'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/play',
      name: 'Play',
      component: Play
    },
    {
      path: '/form',
      name: 'Formulario',
      component: Form
    }
  ]
})
