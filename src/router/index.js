import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "../components/AboutPage.vue";
import HomePage from "../components/HomePage.vue";
import SkillsPage from "../components/SkillsPage.vue";
import ContactMe from "../components/ContactMe.vue";
import PortfolioPage from "../components/PortfolioPage.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/skills",
    name: "Skills",
    component: SkillsPage,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: PortfolioPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactMe,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
