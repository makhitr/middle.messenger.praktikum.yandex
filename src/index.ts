import { MainPage } from "./pages/mainPage";
import { RegisterPage } from "./pages/registerPage";
import { ProfilePage } from "./pages/profilePage";
import { MessagePage } from "./pages/messagePage";
import { ErrorPage404 } from "./pages/errorPage404";
import { ErrorPage500 } from "./pages/errorPage500";

import { Router } from "./services/Router";

const router = new Router("#root");
router
  .use("/", MainPage)
  .use("/sign-up", RegisterPage)
  .use("/settings", ProfilePage)
  .use("/messenger", MessagePage)
  .use("/404", ErrorPage404)
  .use("/500", ErrorPage500)
  .start();


