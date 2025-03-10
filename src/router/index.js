import { createRouter, createWebHistory } from 'vue-router'
import Exercice1 from '../views/exercice1/Index.vue'
import Exercice2 from '../views/exercice2/Index.vue'
import Exercice3 from '../views/exercice3/Index.vue'
import Exercice4 from '../views/exercice4/Index.vue'
import Exercice5 from '../views/exercice5/Index.vue'
import Exercice6 from '../views/exercice6/Index.vue'
import routerExercice4 from '../views/exercice4/router/index.js'

const routes = [
  ...routerExercice4.options.routes,
  {
    path: '/',
    name: 'Exercice1',
    component: Exercice1,
  },
  {
    path: '/exercice2',
    name: 'Exercice2',
    component: Exercice2,
  },
  {
    path: '/exercice3',
    name: 'Exercice3',
    component: Exercice3,
  },
  {
    path: '/exercice4',
    name: 'Exercice4',
    component: Exercice4,
  },
  {
    path: '/exercice5',
    name: 'Exercice5',
    component: Exercice5,
  },
  {
    path: '/exercice6',
    name: 'Exercice6',
    component: Exercice6,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
