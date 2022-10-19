import formTemplate from "./index.hbs";
import errorTemplate from "./pages/errorPages/index.hbs";
import template from "./pages/profile/index.hbs";
import * as profilePage from "../src/pages/profile/index.js";
import * as registerPage from "../src/pages/register/index.js";
import * as authPage from "../src/pages/auth/index.js";
import * as errorPage from "../src/pages/errorPages/index.js";


window.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#root");
  const href = window.location.href;


  if (href.includes("register")) {
    app.innerHTML = formTemplate(registerPage.pageRegisterInfo);
  } else if (href.includes("profile")) {
    app.innerHTML = template(profilePage.pageProfileInfo);
    profilePage.editInfo();
  } else if (href.includes("404")) {
    app.innerHTML = errorTemplate(errorPage.errorPageInfo.error404);
  } else if (href.includes("500")) {
    app.innerHTML = errorTemplate(errorPage.errorPageInfo.error500);
  } else {
    app.innerHTML = formTemplate(authPage.pageAuthInfo);
  }
});
