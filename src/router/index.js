import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Index from '@/components/index'
import Login from '@/components/Login'
import NotFoud from '@/components/404'
import HomeAdmin from '@/components/Admin/Home'
import ListUsers from '@/components/Admin/Users/ListUsers'
import CreateUser from '@/components/Admin/Users/CreateUser'
import ListTickets from '@/components/Tickets/ListTickets'
import CreateTicket from '@/components/Tickets/CreateTicket'

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
      name: 'Index',
      component: Index,
      redirect: '/home',
      children: [
        {
          path: '/admin',
          name: 'HomeAdmin',
          component: HomeAdmin
        },
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/usuarios',
          name: 'ListUsers',
          component: ListUsers
        },
        {
          path: '/usuarios/novo',
          name: 'CreateUser',
          component: CreateUser
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
        }
      ]
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
