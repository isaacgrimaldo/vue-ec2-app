import {createRouter, createWebHashHistory  }  from 'vue-router'
import AppRoutes from '@/modules/modules.router'

const router = createRouter({
    history: createWebHashHistory(),
    routes:AppRoutes
  })
  

  export default router