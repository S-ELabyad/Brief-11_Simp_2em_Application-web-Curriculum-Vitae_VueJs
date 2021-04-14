import Vue from "vue";
import VueRouter from "vue-router";

import Name from "../views/Name.vue";
import fullName from "../components/fullName.vue";
import Formation from "../components/Formation.vue";
import Competence from "../components/Competence.vue";
import Experience from "../components/Experience.vue";
import Langue from "../components/Langue.vue";
import Loisirs from "../components/Loisirs.vue";
import About from "../components/About.vue";
import Cvprev from "../components/CvPrev.vue";
import Download from "../components/Download.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "fullName",
    component: fullName,
  },
  {
    path: "/fullName",
    name: "Name",
    component: Name,
  },


  {
    path: "/Formation",
    name: "Name",
    component: Formation,
  },
  
  {
    path: "/Competence",
    name: "Name",
    component: Competence,
  },
  
  {
    path: "/Experience",
    name: "Name",
    component: Experience,
  },
  {
    path: "/Langue",
    name: "Name",
    component: Langue,
  },
  {
    path: "/Loisirs",
    name: "Name",
    component: Loisirs,
  },
  {
    path: "/About",
    name: "Name",
    component: About,
  },
  {
    path: "/Cvprev",
    name: "Cvprev",
    component: Cvprev,
  },
  {
    // download
    path: "/Download",
    name: "Download",
    component: Download,
  },
  
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
