import MainPage from "./pages/mainPage";
import ProfilePage from "./pages/profilePage/";
import RegisterPage from "./pages/registerPage";
import MessagePage from "./pages/messagePage";
import { ErrorPage404 } from "./pages/errorPage404";
import { ErrorPage500 } from "./pages/errorPage500";
import { Router } from "./services/Router/Router";
import * as UserActions from './services/Store/actions/UserActions'

const router = new Router("#root");

enum Routes {
  Index = "/",
  Register = "/sign-up",
  Profile = "/settings",
  Messenger = "/messenger",
}

window.addEventListener("DOMContentLoaded", async () => {
  router
    .use(Routes.Index, MainPage)
    .use(Routes.Register, RegisterPage)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.Messenger, MessagePage)
    .use("/404", ErrorPage404)
    .use("/500", ErrorPage500);

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Register:
      isProtectedRoute = false;
      break;
  }

  try {
    await UserActions.getUser();

    router.start();

    if (!isProtectedRoute) {
      router.go(Routes.Profile);
    }
  } catch (e) {
    router.start();

    if (isProtectedRoute) {
      router.go(Routes.Index);
    }
  }
});
