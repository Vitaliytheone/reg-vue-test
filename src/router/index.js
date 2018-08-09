import Vue from "vue";
import Router from "vue-router";

import Dashboard from "../views/Dashboard.vue";
import Article from "../views/Article.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Dashboard },
    { path: "/article/:id", component: Article }
  ]
});
