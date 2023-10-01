import { RouteRecordRaw } from "vue-router";
import HomeView from '@/modules/Home/HomeView.vue'

const HomeRoutes:RouteRecordRaw[] = [
  {
    path:'/',
    component:HomeView
  }
]


export default HomeRoutes