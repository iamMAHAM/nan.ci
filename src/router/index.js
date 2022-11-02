import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Admission from '../views/Admission.vue'
import Apropos from '../views/Apropos.vue'
import Formations from '../views/Formations.vue'
import Naniens from '../views/Naniens.vue'
import Parent from '../views/Parent.vue'
import FormationDetail from '../views/FormationDetail.vue'
import ParentPoints from '../views/ParentPoints.vue'
import ParentProjet from '../views/ParentProjet.vue'

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
    name: 'formations',
    component: Formations,
    props:true
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
    path: '/parent/Points',
    name: 'ParentPoints',
    component: ParentPoints
  },
  {
    path: '/parent/Points_Projet',
    name: 'ParentProjet',
    component: ParentProjet
  },
  {
    path: '/formations/:specialite',
    name: 'formation',
    component: FormationDetail,
    props:true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
