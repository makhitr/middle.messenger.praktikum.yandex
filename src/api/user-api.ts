import { HTTPTransport } from "../services/HTTPTransport";
import { User } from "../types/userTypes";
import { BaseAPI } from "./base-api";

const userAPIInstance = new HTTPTransport();

class UserApi extends BaseAPI {
  // request({ id }) {
  //   return userAPIInstance.get(`/${id}`);
  // }

  static getUser() {
    return userAPIInstance
      .get("auth/user")
      .then((data: XMLHttpRequest) => data.response);
  }

  static changeProfile(user: User) {
    return userAPIInstance
      .put("user/profile", {
        headers: {
          "content-type": "application/json",
        },
        data: {
          ...user,
          display_name: "test",
        },
      })
      .then((data: XMLHttpRequest) => data.response);
  }

  static changeAvatar(data) {
    return userAPIInstance
      .put("user/profile/avatar", { data: data })
      .then((data: XMLHttpRequest) => data.response);
  }

  static changePassword(passwords) {
    return userAPIInstance
      .put("user/password", {
        headers: {
          "content-type": "application/json",
        },
        data: passwords,
      })
      .then((data: XMLHttpRequest) => {
        if (data.status === 200) {
          alert("password was changed") 
        } else {
          alert(data.response) 
        }
      });
  }
}

export { UserApi };
