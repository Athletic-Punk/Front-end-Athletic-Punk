import { createRouter, createWebHistory } from 'vue-router'

//GENERAL VIEWS
import HomeView from '../views/general/HomeView.vue'
import ContactView from '@/views/general/ContactView.vue'
import SportsView from '@/views/general/SportsView.vue'

//SPORTS VIEWS
import BasketballView from '@/views/sports/BasketballView.vue'
import GymnasticsView from '@/views/sports/GymnasticsView.vue'
import SoccerView from '@/views/sports/SoccerView.vue'
import VoleyballView from '@/views/sports/VoleyballView.vue'

//SIGN VIEWS
import SignInView from '@/views/signIn-and-signUp/SignInView.vue'
import SignUpView from '@/views/signIn-and-signUp/SignUpView.vue'

//PROFILE VIEWS
import DashboardView from '@/views/profile/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contato',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/esportes',
      name: 'sports',
      component: SportsView,
    },
    {
      path: '/esporte/',
      name: 'sport',
      children: [
        {
          path: 'basquete',
          name: 'basketball',
          component: BasketballView,
        },
        {
          path: 'ginastica',
          name: 'gymnastics',
          component: GymnasticsView,
        },
        {
          path: 'futebol',
          name: 'soccer',
          component: SoccerView,
        },
        {
          path: 'volei',
          name: 'volleyball',
          component: VoleyballView,
        },
      ],
    },
    {
      path: '/minha-conta',
      name: 'profile',
      component: DashboardView,
    },
    {
      path: '/auth/',
      name: 'auth',
      children: [
        {
          path: 'login',
          name: 'signIn',
          component: SignInView,
        },
        {
          path: 'cadastre-se',
          name: 'signUp',
          component: SignUpView,
        },
      ],
    },
  ],
})

export default router
