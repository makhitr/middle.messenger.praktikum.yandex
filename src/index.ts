import MainPage from "./pages/mainPage";
import ProfilePage from "./pages/profilePage/";
import RegisterPage from "./pages/registerPage";
import MessagePage from "./pages/messagePage";
import { ErrorPage404 } from "./pages/errorPage404";
import { ErrorPage500 } from "./pages/errorPage500";
import { Router } from "./services/Router/Router";
import { IndexLayout } from "./layouts/indexLayout";
import { MessageLayout } from "./layouts/messageLayout";


const router = new Router("#root");

router
  .use("/", IndexLayout, { title: "Main Page", content: new MainPage() })
  .use("/sign-up", IndexLayout, {
    title: "Register Page",
    content: new RegisterPage(),
  })
  .use("/settings", IndexLayout, {
    title: "Profile Page",
    content: new ProfilePage(),
  })
  .use("/messenger", MessageLayout, {title: "Messages", content: new MessagePage()})
  .use("/404", ErrorPage404)
  .use("/500", ErrorPage500);

router.start();
