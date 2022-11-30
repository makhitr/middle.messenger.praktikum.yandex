import { UserApi } from "../../../api/user-api";
import { User } from "../../../types/userTypes";
import { Router } from "../../Router/Router";
import Store from "../Store";

const store = new Store();
const router = new Router("#root");


const getUser = () => {
  UserApi.getUser().then((data) => console.log(data));
};

const logoutUser = () => {
  UserApi.logout().then((response: XMLHttpRequest) => {
    if (response.status === 200) {
      store.set("auth", { isAuth: false });
      router.go("/");
    } else {
      console.log("something went wrong");
    }
  });
};

const loginUser = (userInfo: User) => {
  UserApi.signin(userInfo).then((response: XMLHttpRequest) => {
    if (response.status === 200) {
      store.set("auth", { isAuth: true });
      router.go("/messenger");
    } else {
      console.log("something went wrong");
    }
  });
};

const registerUser = (userInfo: User) => {
  UserApi.create(userInfo)
    .then((response: XMLHttpRequest) => {
      if (response.status === 200) {
        store.set("auth", { isAuth: true });
        store.set("user", userInfo);
      } else {
        console.log("something went wrong");
      }
    })
    .then(() => UserApi.logout())
    .then((data) => console.log(data));
};

export { registerUser, loginUser, getUser, logoutUser };
