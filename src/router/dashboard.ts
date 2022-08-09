import type { RouteRecordRaw } from "vue-router";
import LayoutContainer from "@/layout/LayoutContainer.vue";

const DashboardRouter: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: LayoutContainer,
    children: [
      {
        path: "/dashboard",
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
