import { loginView } from "../views/logInView.js";
import { registerView } from "../views/registerView.js";
import { dashboardView } from "../views/dashboard.js";

const routes = {
    "/" : loginView,
    "/register" : registerView,
    "/home": dashboardView
}

export function router() {
  const hash = window.location.hash.slice(1) || "/";
  const route = routes[hash];

  if (route) {
    route();
  } else {
    routes['/']();
  }
}