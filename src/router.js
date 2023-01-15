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
    redirect: `${adminRoot}/basis`,
    meta: { loginRequired: true },

    /*
   define with Authorization :
   meta: { loginRequired: true, roles: [UserRole.Admin, UserRole.Editor] },
   */

   


    children: [
      {
        path: "basis",
        component: () =>
          import(/* webpackChunkName: "piaf" */ "./views/app/basis"),
        redirect: `${adminRoot}/basis/start`,
        children: [
          {
            path: 'start',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/basis/Start')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: 'colop',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/basis/Colop')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: 'create',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/basis/create')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          },
          {
            path: 'basebeam',
            component: () => import(/* webpackChunkName: "piaf" */ './views/app/basis/Basebeam')
            // meta: { roles: [UserRole.Admin, UserRole.Editor] },
          }

        ]
      },
      {
        path: "second-menu",
        component: () =>
          import(/* webpackChunkName: "second-menu" */ "./views/app/second-menu"),
        redirect: `${adminRoot}/second-menu/second`,
        children: [
          { path: 'second', component: () => import(/* webpackChunkName: "piaf" */ './views/app/second-menu/Second') }
        ]
      },


      {
        path: "single",
        component: () =>
          import(/* webpackChunkName: "single" */ "./views/app/single")
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
