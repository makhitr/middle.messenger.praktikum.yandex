import { AuthApi, SigninData, SignupData } from "../../../api/auth-api";
import { Router } from "../../Router/Router";
import * as UserActions from "../../Store/actions/UserActions";

const router = new Router("#root");

const logoutUser = async () => {
  try {
    await AuthApi.logout();
    router.go("/");
  } catch (e: any) {
    console.error(e.reason);
  }
};

const loginUser = async (data: SigninData) => {
  try {
    await AuthApi.signin(data);
    await UserActions.getUser();
    router.go("/messenger");
  } catch (e: any) {
    console.error(e.reason);
  }
};

const registerUser = async (data: SignupData) => {
  try {
    await AuthApi.create(data);
    await UserActions.getUser();
    router.go("/messenger");
  } catch (e: any) {
    console.error(e.reason);
  }
};

export { registerUser, loginUser, logoutUser };
