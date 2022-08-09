import type { RouteRecordRaw } from "vue-router";
import LayoutContainer from "@/layout/LayoutContainer.vue";

const DashboardRouter: Array<RouteRecordRaw> = [
  {
    path: "/dashboard",
    component: LayoutContainer,
    redirect: "/dashboard",
    children: [
      {
        path: "",
        name: "dashboard",
        meta: {
          title: "仪表盘",
        },
        component: () => import("@/views/dashboard/DashboardIndex.vue"),
      },
    ],
  },
];

export default DashboardRouter;
