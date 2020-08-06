// Pages
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";
import { Registration } from "../pages/registration";
import { Profile } from "../pages/profile";
import { Breakfast } from "../pages/breakfast";
import { Lunch } from "../pages/lunch";
import { Dinner } from "../pages/dinner";
import { Vegetables } from "../pages/vegetables";
import { Fruits } from "../pages/fruits";
import { Junk } from "../pages/junk";
import { Coffee } from "../pages/coffee";
import { Steps } from "../pages/steps";
import { Sleep } from "../pages/sleep";
import { Water } from "../pages/water";

export const book = Object.freeze({
  home: {
    url: "/",
    component: Dashboard,
    id: "dashboard",
  },
  login: {
    url: "/login",
    component: Login,
    id: "login",
  },
  registration: {
    url: "/registration",
    component: Registration,
    id: "registration",
  },
  profile: {
    url: "/profile",
    component: Profile,
    id: "profile",
  },
  breakfast: {
    url: "/breakfast",
    component: Breakfast,
    id: "breakfast",
  },
  lunch: {
    url: "/lunch",
    component: Lunch,
    id: "lunch",
  },
  dinner: {
    url: "/dinner",
    component: Dinner,
    id: "dinner",
  },
  steps: {
    url: "/steps",
    component: Steps,
    id: "steps",
  },
  fruits: {
    url: "/fruits",
    component: Fruits,
    id: "fruits",
  },
  vegetables: {
    url: "/vegetables",
    component: Vegetables,
    id: "vegetables",
  },
  junk: {
    url: "/junk",
    component: Junk,
    id: "junk",
  },
  water: {
    url: "/water",
    component: Water,
    id: "water",
  },
  sleep: {
    url: "/sleep",
    component: Sleep,
    id: "sleep",
  },
  coffee: {
    url: "/coffee",
    component: Coffee,
    id: "coffee",
  },
});
