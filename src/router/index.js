import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/pages/Start'
import Home from '@/pages/Home'
// import Hot from '@/pages/Hot'
// import Order from '@/pages/Order'
import Pcontent from '@/pages/Pcontent'
// import Search from '@/pages/Search'
import Cart from '@/pages/Cart'
import EditPeopleInfo from '@/pages/EditPeopleInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/start',
      name: 'Start',
      component: Start
    },
    {
      path: '*',
      name: 'Start',
      redirect: Start
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    // {
    //   path: '/hot',
    //   name: 'Hot',
    //   component: Hot
    // },
    // {
    //   path: '/order',
    //   name: 'Order',
    //   component: Order
    // },
    {
      path: '/pcontent',
      name: 'Pcontent',
      component: Pcontent
    },
    // {
    //   path: '/search',
    //   name: 'Search',
    //   component: Search
    // },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/editPeopleInfo',
      name: 'EditPeopleInfo',
      component: EditPeopleInfo
    }
  ]
})
