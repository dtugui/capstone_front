import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import JobsIndex from "../views/JobsIndex.vue";
import JobsNew from "../views/JobsNew.vue";
import JobsShow from "../views/JobsShow.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import OrganizationsIndex from "../views/OrganizationsIndex.vue";
import OrganizationsShow from "../views/OrganizationsShow.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/jobs", name: "jobs-index", component: JobsIndex },
  { path: "/jobs/new", name: "jobs-new", component: JobsNew },
  { path: "/jobs/:id", name: "jobs-show", component: JobsShow },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/organizations", name: "organizations-index", component: OrganizationsIndex },
  { path: "/organizations/:id", name: "organizations-show", component: OrganizationsShow },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
