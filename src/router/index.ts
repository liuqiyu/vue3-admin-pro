import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import LayoutContainer from "@/layout/LayoutContainer.vue";

const routesContext: any = import.meta.glob("./*.ts", { eager: true });

export let constantModules: Array<RouteRecordRaw> = [];
Object.keys(routesContext).forEach((key) => {
  constantModules = constantModules.concat(routesContext[key].default);
});

export const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "LayoutContainer",
    component: LayoutContainer,
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/HomeView.vue"),
      },
    ],
  },
  ...constantModules,
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () => import("../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
