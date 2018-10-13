import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Us from '@/components/us'
import Ordermanage from '@/components/ordermanage'
import Vehiclemanage from '@/components/vehiclemanage'
import Drivermanage from '@/components/drivermanage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/us',
      name: 'Us',
      component: Us
    },
    {
      path: '/ordermanage',
      name: 'Ordermanage',
      component: Ordermanage
    },
    {
      path: '/vehiclemanage',
      name: 'Vehiclemanage',
      component: Vehiclemanage
    },
    {
      path: '/drivermanage',
      name: 'Drivermanage',
      component: Drivermanage
    }
  ]
})
