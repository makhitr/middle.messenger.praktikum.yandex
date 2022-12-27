import { AuthApi } from "../../../api/auth-api";
import { UserApi } from "../../../api/user-api";
import { Router } from "../../Router/Router";
import Store from "../Store";

const store = new Store();
const router = new Router("#root");

const logoutUser = () => {
  AuthApi.logout().then((response: XMLHttpRequest) => {
    if (response.status === 200) {
      router.go("/");
    } else {
      console.log("something went wrong");
    }
  });
};

const loginUser = (userInfo) => {
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

const registerUser = (userInfo) => {
  AuthApi.create(userInfo).then((response: XMLHttpRequest) => {
    if (response.status === 200) {
      store.set("user", userInfo);
    } else {
      console.log("something went wrong");
    }
  });
};

export { registerUser, loginUser, logoutUser };
