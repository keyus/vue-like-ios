import { createRouter, createWebHistory } from 'vue-router'

import Page1 from '../pages/Page1.vue';
import Page2 from '../pages/Page2.vue';
import Page3 from '../pages/Page3.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "page1",
      component: Page1,
      meta: {
        page: 1
      }
    },
    {
      path: "/page2",
      name: "page2",
      component: Page2,
      meta: {
        page: 2
      }
    },
    {
      path: "/page3",
      name: "page3",
      component: Page3,
      meta: {
        page: 3
      }
    }
  ]
})

router.afterEach((to, from) => {
  to.meta.transition = to.meta.page > from.meta.page ? 'next' : 'prev'
})

export default router
