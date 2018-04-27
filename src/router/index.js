import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import HomeAdmin from '@/components/Admin/Home'
import ListUsers from '@/components/Admin/Users/ListUsers'
import CreateUser from '@/components/Admin/Users/CreateUser'
import ListTickets from '@/components/Tickets/ListTickets'
import CreateTicket from '@/components/Tickets/CreateTicket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'HomeAdmin',
      component: HomeAdmin
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
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
})
