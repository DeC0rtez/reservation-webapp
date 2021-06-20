import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Floorplan from '../views/Floorplan.vue'
import MakeReservation from '../views/MakeReservation.vue'
import Reservations from '../views/Reservations.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/floorplan',
    name: 'Floorplan',
    component: Floorplan
  },
  {
    path: '/make-reservation',
    name: 'Make a reservation',
    component: MakeReservation
  },
  {
    path: '/reservations',
    name: 'Reservations',
    component: Reservations
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
