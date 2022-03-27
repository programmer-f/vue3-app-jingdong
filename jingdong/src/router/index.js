import { createRouter, createWebHashHistory } from "vue-router";
// import Home from '../views/Home.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/Login.vue"),
    beforeEnter: (to, from, next) => {
      const { isLogin } = localStorage;
      isLogin ? next({ name: "Home" }) : next();
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/register/Register.vue"),
    beforeEach: (to, from, next) => {
      const { isLogin } = localStorage;
      isLogin ? next({ name: "Home" }) : next();
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//每次路由跳转之前都会调用
router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  const { name } = to;
  const isLoginOrRegister = name === "Login" || name === "Register";
  isLogin || isLoginOrRegister ? next() : next({ name: "Login" });
});

export default router;
