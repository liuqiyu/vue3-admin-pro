import { createRouter, createWebHistory } from "vue-router";
import LayoutContainer from "@/layout/LayoutContainer.vue";

const routesContext: any = import.meta.glob("./*.ts", { eager: true });

export let constantModules: any = [];
Object.keys(routesContext).forEach((key) => {
  constantModules = constantModules.concat(routesContext[key].default);
});
console.log(constantModules, 222333)

export const routes = [
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
