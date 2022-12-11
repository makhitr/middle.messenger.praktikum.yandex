import { UserApi } from "../../../api/user-api";
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

export { getUser, updateProfile };
