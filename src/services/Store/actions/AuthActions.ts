import { AuthApi } from "../../../api/auth-api";
import { UserApi } from "../../../api/user-api";
import { IndexLayout } from "../../../layouts/indexLayout";
import { ProfilePage } from "../../../pages/profilePage/profilePage";
import { User } from "../../../types/userTypes";
import { Router } from "../../Router/Router";
import Store from "../Store";

const store = new Store();
const router = new Router("#root");

const logoutUser = () => {
  AuthApi.logout().then((response: XMLHttpRequest) => {
    if (response.status === 200) {
      store.set("auth", { isAuth: false });
      router.go("/");
    } else {
      console.log("something went wrong");
    }
  });
};

const loginUser = (userInfo) => {
  console.log(userInfo);

  AuthApi.signin(userInfo)
    .then((response: XMLHttpRequest) => {
      if (response.status === 200) {
        store.set("auth", { isAuth: true });
      } else {
        console.log("something went wrong");
      }
    })
    .then(() => {
      UserApi.getUser().then((response) =>
        store.set("user", JSON.parse(response))
      );
    });
};

const registerUser = (userInfo: User) => {
  AuthApi.create(userInfo).then((response: XMLHttpRequest) => {
    if (response.status === 200) {
      store.set("auth", { isAuth: true });
      store.set("user", userInfo);
      // router.use("/settings", IndexLayout, {
      //     title: "Profile Page",
      //     content: new ProfilePage(),
      //   })
      // router.go("/messenger");
    } else {
      console.log("something went wrong");
    }
  });
};

export { registerUser, loginUser, logoutUser };
