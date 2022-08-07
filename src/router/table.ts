import LayoutContainer from "@/layout/LayoutContainer.vue";

export default [
  {
    path: "/table",
    component: LayoutContainer,
    children: [
      {
        path: "",
        name: "table",
        component: () => import("@/views/table/tableView.vue"),
      },
    ],
  },
];
