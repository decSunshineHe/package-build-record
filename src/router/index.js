import Vue from "vue";
import Router from "vue-router";
import mainHome from "@/page/main-home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "main-home",
      component: mainHome,
    },
  ],
});
