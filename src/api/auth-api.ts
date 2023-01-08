import { HTTPTransport } from "../services/HTTPTransport";
import { BaseAPI } from "./base-api";

export interface SignupData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface SigninData {
  login: string;
  password: string;
}

const authAPIInstance = new HTTPTransport();

class AuthApi extends BaseAPI {
  static create(data: SignupData) {
    return authAPIInstance.post("auth/signup", {
      data: data,
    });
  }

  static signin(data: SigninData) {
    return authAPIInstance.post("auth/signin", {
      data: data,
    });
  }

  static logout() {
    return authAPIInstance.post("auth/logout");
  }
}

export { AuthApi };
