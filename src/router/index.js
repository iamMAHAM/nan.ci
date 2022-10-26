import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Admission from '../views/Admission.vue'
import Apropos from '../views/Apropos.vue'
import Formations from '../views/Formations.vue'
import Naniens from '../views/Naniens.vue'
import Parent from '../views/Parent.vue'
import FormationDetail from '../views/FormationDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/admission',
    name: 'admission',
    component: Admission
  },
  {
    path: '/apropos',
    name: 'about',
    component: Apropos
  },
  {
    path: '/formations',
    name: 'formation',
    component: Formations
  },
  {
    path: '/naniens',
    name: 'naniens',
    component: Naniens
  },
  {
    path: '/parent',
    name: 'parent',
    component: Parent
  },
  {
    path: '/formations/:specialite',
    name: 'formation',
    component: FormationDetail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
