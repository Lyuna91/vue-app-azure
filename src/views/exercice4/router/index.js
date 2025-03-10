import { createRouter, createWebHistory } from 'vue-router'
import Index from '../Index.vue'
import UserList from '../_components/UserList.vue'
import UserProfile from '../_components/UserProfile.vue'
import NotFound from '../_components/NotFound.vue'

const routes = [
  {
    path: '/exercice4/home',
    name: 'home',
    component: Index,
  },
  {
    path: '/exercice4/users',
    name: 'user-list',
    component: UserList,
  },
  {
    path: '/exercice4/users/:id',
    name: 'user-profile',
    component: UserProfile,
    props: true, // Permet de passer l'ID comme prop
  },
  {
    path: '/:pathMatch(.*)*', // Capture toutes les routes non définies
    name: 'not-found',
    component: NotFound,
  },
]

const routerExercice4 = createRouter({
  history: createWebHistory(),
  routes,
})

export default routerExercice4
