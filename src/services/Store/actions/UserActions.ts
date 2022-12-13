import { UserApi } from "../../../api/user-api";
import { Form } from "../../../components/form";
import Store from "../Store";
const store = new Store();

const getUser = async () => {
  await UserApi.getUser().then((data) => {
    return JSON.parse(data);
  });
};

const updateProfile = async (user) => {
  await UserApi.changeProfile(user).then((response) =>
    store.set("user", JSON.parse(response))
  );
};

const updateAvatar = async (data: string) => {
  await UserApi.changeAvatar(data)
};

const updatePassword = async (data) => {
  await UserApi.changePassword(data)
};

export { getUser, updateProfile, updateAvatar, updatePassword };

