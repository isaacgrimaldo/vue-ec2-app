import { RouteRecordRaw } from "vue-router";
import HomeRoutes from "@/modules/Home/home.router";

const AppRoutes:RouteRecordRaw[] =  [
    ...HomeRoutes
]

export default AppRoutes