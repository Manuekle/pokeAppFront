import Vue from "vue";
// import VueRouter, { RouteConfig } from "vue-router";
import Router from "vue-router";
// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";
import Maps from "@/views/admin/Maps.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts

import Home from "@/views/Home.vue";
import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";
import Index from "@/views/Index.vue";
// Vue.use(VueRouter);
Vue.use(Router);

const router = new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/auth",
      redirect: "/auth/login",
      component: () => import("../layout/Auth.vue"),
      children: [
        {
          path: "/auth/login",
          component: Login,
        },
        {
          path: "/auth/register",
          component: Register,
        },
      ],
    },
    {
      path: "/admin",
      redirect: "/admin/dashboard",
      component: () => import("../layout/Admin.vue"),
      children: [
        {
          path: "/admin/dashboard",
          component: Dashboard,
        },
        {
          path: "/admin/settings",
          component: Settings,
        },
        {
          path: "/admin/tables",
          component: Tables,
        },
        {
          path: "/admin/maps",
          component: Maps,
        },        
      ],
    },
    {
      path: "/",
      component: Home,
    },
    {
      path: "/Index",
      component: Index,
    },
    {
      path: "/landing",
      component: Landing,
    },
    {
      path: "/profile",
      component: Profile,
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ], // fin de rutas
});

export default router;
