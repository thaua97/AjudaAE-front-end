import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/pages/admin/Admin'
import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'
import NotFoud from '@/pages/errors/404'
import ListTickets from '@/pages/tickets/ListTickets'
import CreateTicket from '@/pages/tickets/CreateTicket'
import Profile from '@/pages/user/profile/Profile'
import ListUsers from '@/pages/user/listUsers/ListUsers'

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
      path: '/perfil',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/usuarios',
      name: 'ListUsers',
      component: ListUsers
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
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ],
  mode: 'history',
  linkActiveClass: 'active-page',
  linkExactActiveClass: 'current-page'
})
