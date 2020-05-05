import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Countries from "../views/Countries.vue";
import Incubation from "../views/Incubation.vue";
import Symptoms from "../views/Symptoms.vue";
import Transfer from "../views/Transfer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About 
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/countries",
    name: "countries",
    component: Countries 
  }, 
  {
    path: "/incubation",
    name: "incubation",
    component: Incubation 
  },
  {
    path: "/symptoms",
    name: "symptoms",
    component: Symptoms
  },
  {
    path: "/transfer",
    name: "transfer",
    component: Transfer
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;