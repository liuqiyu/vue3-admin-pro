import type { RouteRecordRaw } from "vue-router";
import LayoutContainer from "@/layout/LayoutContainer.vue";

const TableRouter: Array<RouteRecordRaw> = [
  {
    path: "/table",
    meta: {
      title: "表格",
    },
    component: LayoutContainer,
    children: [
      {
        path: "table1",
        name: "table1",
        meta: {
          title: "表格1",
        },
        component: () => import("@/views/table/tableView.vue"),
      },
      {
        path: "table2",
        name: "table2",
        meta: {
          title: "表格2",
        },
        component: () => import("@/views/table/tableView.vue"),
      },
    ],
  },
];

export default TableRouter;
