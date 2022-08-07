import LayoutContainer from "@/layout/LayoutContainer.vue";

export default [
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
