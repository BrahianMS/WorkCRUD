import { loginView } from "../views/logInView.js";
import { registerView } from "../views/registerView.js";

const routes = {
    "/" : loginView,
    "/register" : registerView,
    "/home": dashboardView,
    "/notfound": notFound,
}

export function router() {
  const hash = window.location.hash.slice(1) || "/landing";
  const route = routes[hash];

  if (route) {
    route();
  } else {
    routes['/notfound']();
  }
}