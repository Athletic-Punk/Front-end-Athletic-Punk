import { createRouter, createWebHistory } from 'vue-router'

//GENERAL VIEWS
import HomeView from '../views/general/HomeView.vue'
import ContactView from '@/views/general/ContactView.vue'
import SportsView from '@/views/general/SportsView.vue'

//SPORTS VIEWS
import AthleticsView from '@/views/sports/AthleticsView.vue'
import MotorsportView from '@/views/sports/MotorsportView.vue'
import BadmintonView from '@/views/sports/BadmintonView.vue'
import BasketballView from '@/views/sports/BasketballView.vue'
import BaseballView from '@/views/sports/BaseballView.vue'
import BoxingView from '@/views/sports/BoxingView.vue'
import CanoeingView from '@/views/sports/CanoeingView.vue'
import CyclingView from '@/views/sports/CyclingView.vue'
import FencingView from '@/views/sports/FencingView.vue'
import SoccerView from '@/views/sports/SoccerView.vue'
import ArtisticGymnasticsView from '@/views/sports/ArtisticGymnasticsView.vue'
import RhythmicGymnasticsView from '@/views/sports/RhythmicGymnasticsView.vue'
import GolfView from '@/views/sports/GolfView.vue'
import HandballView from '@/views/sports/HandballView.vue'
import EquestrianView from '@/views/sports/EquestrianView.vue'
import JudoView from '@/views/sports/JudoView.vue'
import SwimmingView from '@/views/sports/SwimmingView.vue'
import SkatingView from '@/views/sports/SkatingView.vue'
import RowingView from '@/views/sports/RowingView.vue'
import RugbyView from '@/views/sports/RugbyView.vue'
import SkateboardingView from '@/views/sports/SkateboardingView.vue'
import SurfingView from '@/views/sports/SurfingView.vue'
import TennisView from '@/views/sports/TennisView.vue'
import TennisTableView from '@/views/sports/TennisTableView.vue'
import TriathlonView from '@/views/sports/TriathlonView.vue'
import VolleyballView from '@/views/sports/VolleyballView.vue'

//SIGN VIEWS
import SignInView from '@/views/signIn-and-signUp/SignInView.vue'
import SignUpView from '@/views/signIn-and-signUp/SignUpView.vue'

//PROFILE VIEWS
import DashboardView from '@/views/profile/DashboardView.vue'
import FormView from '@/views/profile/FormView.vue'

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
          path: 'atletismo',
          name: 'Athletics',
          component: AthleticsView,
        },
        {
          path: 'automobilismo',
          name: 'Motorsport',
          component: MotorsportView,
        },
        {
          path: 'badminton',
          name: 'Badminton',
          component: BadmintonView,
        },
        {
          path: 'basquete',
          name: 'Basketball',
          component: BasketballView,
        },
        {
          path: 'beisebol',
          name: 'Baseball',
          component: BaseballView,
        },
        {
          path: 'boxe',
          name: 'Boxing',
          component: BoxingView,
        },
        {
          path: 'canoagem',
          name: 'Canoeing',
          component: CanoeingView,
        },
        {
          path: 'ciclismo',
          name: 'Cycling',
          component: CyclingView,
        },
        {
          path: 'esgrima',
          name: 'Fencing',
          component: FencingView,
        },
        {
          path: 'futebol',
          name: 'Soccer',
          component: SoccerView,
        },
        {
          path: 'ginastica-artistica',
          name: 'Artistic Gymnastics',
          component: ArtisticGymnasticsView,
        },
        {
          path: 'ginastica-ritmica',
          name: 'Rhythmic Gymnastics',
          component: RhythmicGymnasticsView,
        },
        {
          path: 'golfe',
          name: 'Golf',
          component: GolfView,
        },
        {
          path: 'handebol',
          name: 'Handball',
          component: HandballView,
        },
        {
          path: 'hipismo',
          name: 'Equestrian',
          component: EquestrianView,
        },
        {
          path: 'judo',
          name: 'Judo',
          component: JudoView,
        },
        {
          path: 'natacao',
          name: 'Swimming',
          component: SwimmingView,
        },
        {
          path: 'patinacao',
          name: 'Skating',
          component: SkatingView,
        },
        {
          path: 'remo',
          name: 'Rowing',
          component: RowingView,
        },
        {
          path: 'rugby',
          name: 'Rugby',
          component: RugbyView,
        },
        {
          path: 'skate',
          name: 'Skateboarding',
          component: SkateboardingView,
        },
        {
          path: 'surf',
          name: 'Surfing',
          component: SurfingView,
        },
        {
          path: 'tenis',
          name: 'Tennis',
          component: TennisView,
        },
        {
          path: 'tenis-de-mesa',
          name: 'Table Tennis',
          component: TennisTableView,
        },

        {
          path: 'triatlo',
          name: 'Triathlon',
          component: TriathlonView,
        },
        {
          path: 'volei',
          name: 'Volleyball',
          component: VolleyballView,
        },
      ],
    },
    {
      path: '/minha-conta',
      name: 'profile',
      component: DashboardView,
    },
    {
      path: '/formulario-rotina',
      name: 'form',
      component: FormView,
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
  scrollBehavior() {
      return { top: 0 };
  },
})

export default router
