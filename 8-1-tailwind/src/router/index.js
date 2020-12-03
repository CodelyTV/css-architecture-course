import { createRouter, createWebHistory } from "vue-router";
import Courses from "../views/Courses.vue";

const routes = [
  {
    path: "/",
    name: "Courses",
    component: Courses
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
