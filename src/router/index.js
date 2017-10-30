import Vue from 'vue'
import Router from 'vue-router'
import Rhymesaurus from '@/components/Rhymesaurus'
import RhymePreceding from '@/components/RhymePreceding'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rhymesaurus',
      component: Rhymesaurus
    },
    {
      path: '/rhyme-preceding',
      name: 'RhymePreceding',
      component: RhymePreceding
    }
  ]
})
