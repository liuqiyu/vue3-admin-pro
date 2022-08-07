import LayoutContainer from "@/layout/LayoutContainer.vue";

export default [
  {
    path: "/",
    component: LayoutContainer,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/DashboardIndex.vue"),
      },
    ],
  },
];
