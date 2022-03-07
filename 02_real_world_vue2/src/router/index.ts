import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventShow from '../views/EventShow.vue'
import EventCreate from '../views/EventCreate.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/', // url
    name: 'event-list', // name of the route
    component: EventList, // which component to render
  },
  {
    path: '/event',
    name: 'event-show',
    component: EventShow,
  },
  {
    path: 'event/create',
    name: 'event-create',
    component: EventCreate,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
