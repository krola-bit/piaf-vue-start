import Vue from "vue";
import VueRouter from "vue-router";
import AuthGuard from "./utils/auth.guard";
import { adminRoot } from "./constants/config";
import { UserRole } from "./utils/auth.roles";
import axios from "axios";


Vue.use(VueRouter);




const routes = [
  {
    path: "/",
    component: () => import(/* webpackChunkName: "home" */ "./views/home"),
    // redirect: `${adminRoot}/piaf`,
  },
  {
    path: adminRoot,
    

    component: () => import(/* webpackChunkName: "app" */ "./views/app"),
    redirect: `${adminRoot}/add`,
    meta: { loginRequired: true },


    children: [
      {
        path: "add",
        component: () =>
          import("./views/app/add"),
        redirect: `${adminRoot}/add/start`,
        children: [
          {
            path: 'start',
            component: () => import('./views/app/add/Start')
          },
          {
            path: 'alapozas',
            component: () => import('./views/app/add/alapozas')
          }
        ]
      },
      {
        path: "ajanlat/:id?",
        component: () =>
          import("./views/app/ajanlat/tetel.vue"),
        
      }
    ]
  },
  {
    path: "/error",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error")
  },
  {
    path: "/user",
    component: () => import(/* webpackChunkName: "user" */ "./views/user"),
    redirect: "/user/login",
    children: [
      {
        path: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Login")
      },
      {
        path: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Register")
      },
      {
        path: "forgot-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ForgotPassword")
      },
      {
        path: "reset-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ResetPassword")
      },

    ]
  },
  {
    path: "*",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error")
  }
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history",
});
router.beforeEach(AuthGuard);


  
export default router;
