import LayoutContainer from "@/layout/LayoutContainer.vue";

export default [
  {
    path: "/tab",
    component: LayoutContainer,
    children: [
      {
        path: "",
        name: "tab",
        component: () => import("@/views/tab/TabView.vue"),
      },
    ],
  },
];
