import { UserApi } from "../../../api/user-api";
import { IState } from "../../../types/stateTypes";
import Store from "../Store";
const store = new Store();

const getUser = async () => {
  const user = await UserApi.getUser();
  store.set("user", user);
};

const updateProfile = async (user) => {
  const data = await UserApi.changeProfile(user);
  store.set("user", data);
};

const updateAvatar = async (data: FormData) => {
 const user = await UserApi.changeAvatar(data);
 store.set("user", user);
};

const updatePassword = async (data) => {
  await UserApi.changePassword(data);
};


export { getUser, updateProfile, updateAvatar, updatePassword };
