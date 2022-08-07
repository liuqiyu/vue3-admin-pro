import LayoutContainer from "@/layout/LayoutContainer.vue";

export default [
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
