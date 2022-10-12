import Vue from "vue";
import VueRouter from "vue-router";
import CardsHomeMobile from "../views/CardsHomeMobile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "CardsHome",
    component: CardsHomeMobile,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
