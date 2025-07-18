import { router } from "../js/routes.js";

router()

// Evento para cambiar de ruta al cambiar el hash
window.addEventListener("hashchange", router);

// También ejecuta el router al cargar la página
window.addEventListener("DOMContentLoaded", router);