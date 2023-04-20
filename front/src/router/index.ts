import { createRouter, createWebHistory } from 'vue-router'
// import BasketBlock from '../components/BasketBlock.vue'
// import LolCopm from '../components/LolComp.vue'
import MainBlock from '../MainBlock.vue'

const router = createRouter({
  // scrollBehavior(to, from, savedPosition) {
  //   if (to.hash) {
  //     return {
  //       el: to.hash,
  //       behavior: 'smooth'
  //     }
  //   }
  // },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main',
      name: 'main',
      component: MainBlock
    },

    {
      path: '/basket',
      name: 'basket',
      component: () => import('../components/basket/BasketBlock.vue')
    },

    {
      path: '/profile',
      name: 'profile',
      component: () => import('../components/user-profile/UserProfile.vue')
    },

    {
      path: '/info',
      name: 'info',
      component: () => import('../components/info/InfoBlock.vue')
    },

    // {
    //   path: '/orders',
    //   name: 'orders',
    //   component: () => import('../components/')
    // },

    {
      path: '/',
      name: 'register',
      component: () => import('../components/register&auth/RegisterMain.vue')
    },

    {
      path: '/menu',
      name: 'menu',
      component: () => import('../components/menu/MenuMain.vue')
    },

    {
      path: '/orders',
      name: 'orders',
      component: () => import('../components/orders/OrdersBlock.vue')
    },

    {
      path: '/order-details',
      name: 'order-details',
      component: () => import('../components/orders/OrdersDetails.vue')
    },

    {
      path: '/orders-empty',
      name: 'orders-empty',
      component: () => import('../components/orders/OrdersEmpty.vue')
    }

    // {
    //   path: "*",
    //   name: "notFound",
    //   component: NotFound
    // }
  ]
})

// if (history.scrollRestoration) {
//   window.history.scrollRestoration = 'manual'
//   console.log(window.history)
// }
// const p = (window.history.scrollRestoration = manual)
// console.log(p)

export default router
