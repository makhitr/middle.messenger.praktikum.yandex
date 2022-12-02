import { HTTPTransport } from "../services/HTTPTransport";
import { BaseAPI } from "./base-api";
import { User } from "../types/userTypes";

const authAPIInstance = new HTTPTransport();

class AuthApi extends BaseAPI {
  static signin(userInfo: User) {
    const { login, password } = userInfo;
    return authAPIInstance.post("auth/signin", {
      headers: {
        "content-type": "application/json",
      },
      data: { login, password },
    });
  }


  static logout() {
    return authAPIInstance.post("auth/logout");
  }

  static create(userInfo: User) {
    return authAPIInstance.post("auth/signup", {
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

export { AuthApi };
