import LayoutContainer from "@/layout/LayoutContainer.vue";

export default [
  {
    path: "/table",
    component: LayoutContainer,
    children: [
      {
        path: "",
        name: "table",
        meta: {
          title: "表格",
        },
        component: () => import("@/views/table/tableView.vue"),
      },
    ],
  },
];
