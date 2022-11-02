import formTemplate from "./index.hbs";
import errorTemplate from "./pages/errorPages/index.hbs";
import template from "./pages/profile/index.hbs";
import * as profilePage from "./pages/profile/index";
import * as registerPage from "./pages/register/index";
import * as authPage from "./pages/auth/index";
import * as errorPage from "./pages/errorPages/index";
import Form from "./components/form/Form";
import renderDOM from "./utils/renderDOM";
import IndexLayout from "./layouts/IndexLayout";
import Page from "./pages/IndexPage";

const form = new Form({ title: "Login Form" })
const content = new Page({ title: "My messenger", form: form })


const page = new IndexLayout({
  title: "Login Page",
  content: content
})



window.addEventListener("DOMContentLoaded", () => {
  renderDOM("#root", page)

//   if (href.includes("register")) {
//     app.innerHTML = formTemplate(registerPage.pageRegisterInfo);
//   } else if (href.includes("profile")) {
//     app.innerHTML = template(profilePage.pageProfileInfo);
//     profilePage.editInfo();
//   } else if (href.includes("404")) {
//     app.innerHTML = errorTemplate(errorPage.errorPageInfo.error404);
//   } else if (href.includes("500")) {
//     app.innerHTML = errorTemplate(errorPage.errorPageInfo.error500);
//   } else {
//     app.innerHTML = formTemplate(authPage.pageAuthInfo);
//   }
});
