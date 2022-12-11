import MainPage from "./pages/mainPage";
import { RegisterPage } from "./pages/registerPage";
// import { ProfilePage } from "./pages/profilePage/profilePage_old";
import { MessagePage } from "./pages/messagePage";
import { ErrorPage404 } from "./pages/errorPage404";
import { ErrorPage500 } from "./pages/errorPage500";
import { Router } from "./services/Router/Router";
import { IndexLayout } from "./layouts/indexLayout";
import ProfilePage from "./pages/profilePage/";

const router = new Router("#root");
router
  // .use("/", IndexLayout, { title: "Главная страница", content: "This is content"})
  .use("/", IndexLayout, { title: "Main Page", content: new MainPage() })
  .use("/sign-up", RegisterPage) 
  .use("/settings", IndexLayout, {
    title: "Profile Page",
    content: new ProfilePage(),
  })
  .use("/messenger", MessagePage)
  .use("/404", ErrorPage404)
  .use("/500", ErrorPage500)
  .start();
