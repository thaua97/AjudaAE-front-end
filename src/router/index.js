import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'
import NotFoud from '@/pages/errors/404'
import ListTickets from '@/pages/tickets/ListTickets'
import CreateTicket from '@/pages/tickets/CreateTicket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'NotFoud',
      component: NotFoud
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/chamados',
      name: 'ListTickets',
      component: ListTickets
    },
    {
      path: '/chamados/novo',
      name: 'CreateTicket',
      component: CreateTicket
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ],
  mode: 'history',
  linkActiveClass: 'active-page',
  linkExactActiveClass: 'current-page'
})
