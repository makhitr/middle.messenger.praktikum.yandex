// import formTemplate from "./index.hbs";
// import errorTemplate from "./pages/errorPages/index.hbs";
import template from "./pages/profile/index.hbs";
import * as profile from "./pages/profile/index";
// import * as registerPage from "./pages/register/index";
// import * as authPage from "./pages/auth/index";
// import * as errorPage from "./pages/errorPages/index";

import { mainPage } from "./pages/mainPage";
import { registerPage } from "./pages/registerPage";
import renderDOM from "./utils/renderDOM";
import { profilePage } from "./pages/profilePage";




window.addEventListener("DOMContentLoaded", () => {
  const href = window.location.href;
  const app = document.querySelector("#root");

  if (href.includes("register")) {
    renderDOM("#root", registerPage)

  } else if (href.includes("profile")) {
    app.innerHTML = template(profile.pageProfileInfo);
    profile.editInfo();
  } else if (href.includes("test")) {
    renderDOM("#root", profilePage)
  }
  
  else {
    renderDOM("#root", mainPage)
  }
  /*
  
  const href = window.location.href;
  const app = document.querySelector("#root");

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
    */
});
