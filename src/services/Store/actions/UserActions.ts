import { UserApi } from "../../../api/user-api";
import Store from "../Store";
const store = new Store();

const getUser = async () => {
  const user =  await UserApi.getUser()
  store.set('user', user)
};

const updateProfile = async (user) => {
  await UserApi.changeProfile(user).then((response) =>
    store.set("user", JSON.parse(response))
  );
};

const updateAvatar = async (data: FormData) => {
  await UserApi.changeAvatar(data)
};

const updatePassword = async (data) => {
  await UserApi.changePassword(data)
};

export { getUser, updateProfile, updateAvatar, updatePassword };

