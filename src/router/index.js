import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "../components/AboutPage.vue";
import HomePage from "../components/HomePage.vue";
import SkillsPage from "../components/SkillsPage.vue";
import ContactMe from "../components/ContactMe.vue";
import PortfolioPage from "../components/PortfolioPage.vue";
import ExtraPage from '../components/ExtraPage.vue'

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
  }, {
    path: "/supersecretpage",
    name: "Supersecretpage",
    component: ExtraPage,
  },
];

const router = createRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
