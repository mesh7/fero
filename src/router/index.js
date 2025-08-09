import { createMemoryHistory, createRouter } from "vue-router";

import LandingPage from "../views/Landing-page/LandingPage.vue";
import PriceDetailsPage from "../views/Price-details-page/PriceDetailsPage.vue";

const routes = [
  { path: "/", name: "LandingPage", component: LandingPage },
  { path: "/price-details",  name: "PriceDetailsPage", component: PriceDetailsPage },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;