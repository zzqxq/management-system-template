import { createRouter, createWebHashHistory } from "vue-router";

import Layout from "@/layout/index.vue";
// 静态路由
export const constantRoutes = [
  {
    path: "/",
    name: "/",
    component: Layout,
    redirect: "/home",

    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home.vue"),
      }
    ],
  },
];

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;

