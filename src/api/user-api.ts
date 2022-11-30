import { HTTPTransport } from "../services/HTTPTransport";
import { User } from "../types/userTypes";
import { BaseAPI } from "./base-api";

// const userAPIInstance = new HTTPTransport("api/v1/user");
const userAPIInstance = new HTTPTransport();

class UserApi extends BaseAPI {
  // request({ id }) {
  //   return userAPIInstance.get(`/${id}`);
  // }

  static signin(userInfo: User) {
    const { login, password } = userInfo;
    return userAPIInstance.post("auth/signin", {
      headers: {
        "content-type": "application/json",
      },
      data: { login, password },
    });
  }

  static getUser() {
    return userAPIInstance.get("auth/user");
  }

  static logout() {
    return userAPIInstance.post("auth/logout");
  }

  static create(userInfo: User) {
    return userAPIInstance.post("auth/signup", {
      headers: {
        "content-type": "application/json",
      },
      data: userInfo,
    });
    // И то, только в случае, если уверены в результате,
    // иначе контроллер проверит все сам дальше
    // .then({user: {info}} => info);
  }
}

export { UserApi };
