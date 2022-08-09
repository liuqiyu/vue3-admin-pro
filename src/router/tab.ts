import type { RouteRecordRaw } from "vue-router";
import LayoutContainer from "@/layout/LayoutContainer.vue";

const TabRouter: Array<RouteRecordRaw> = [
  {
    path: "/tab",
    component: LayoutContainer,
    children: [
      {
        path: "",
        name: "tab",
        meta: {
          title: "标签页",
        },
        component: () => import("@/views/tab/TabView.vue"),
      },
    ],
  },
];

export default TabRouter;
