import { mainPage } from "./pages/mainPage";
import { registerPage } from "./pages/registerPage";
import { renderDOM } from "./utils/renderDOM";
import { profilePage } from "./pages/profilePage";
import { messagePage } from "./pages/messagePage";
import { errorPage404 } from "./pages/errorPage404";
import { errorPage500 } from "./pages/errorPage500";

window.addEventListener("DOMContentLoaded", () => {
  const { href } = window.location;

  if (href.includes("register")) {
    renderDOM("#root", registerPage);
  } else if (href.includes("profile")) {
    renderDOM("#root", profilePage);
  } else if (href.includes("message")) {
    renderDOM("#root", messagePage);
  } else if (href.includes("404")) {
    renderDOM("#root", errorPage404);
  } else if (href.includes("500")) {
    renderDOM("#root", errorPage500);
  } else {
    renderDOM("#root", mainPage);
  }
});
