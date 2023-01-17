import { HTTPTransport } from "../services/HTTPTransport";
import { User } from "../types/userTypes";
import { BaseAPI } from "./base-api";

const userAPIInstance = new HTTPTransport();

class UserApi extends BaseAPI {
  // request({ id }) {
  //   return userAPIInstance.get(`/${id}`);
  // }

  static getUser() {
    return userAPIInstance.get("auth/user");
  }

  static changeProfile(user: User) {
    return userAPIInstance.put("user/profile", {
      data: {
        ...user,
        display_name: "test",
      },
    });
  }

  static changeAvatar(data: FormData) {
    return userAPIInstance.put("user/profile/avatar", { data: data });
  }

  static changePassword(passwords) {
    return userAPIInstance
      .put("user/password", {
        data: passwords,
      })
      .then((data: XMLHttpRequest) => {
        if (data.status === 200) {
          alert("password was changed");
        } else {
          alert(data.response);
        }
      });
  }
}

export { UserApi };
