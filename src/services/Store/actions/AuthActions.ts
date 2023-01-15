import { AuthApi, SigninData, SignupData } from "../../../api/auth-api";
import { Router } from "../../Router/Router";
import * as UserActions from "../../Store/actions/UserActions";
import * as MessagesActions from "../../Store/actions/MessagesActions";
import * as ChatActions from "../../Store/actions/ChatActions";

const router = new Router("#root");

const logoutUser = async () => {
  try {
    await AuthApi.logout();
    MessagesActions.closeAll()
    router.go("/");
  } catch (e: any) {
    console.error(e);
  }
};

const loginUser = async (data: SigninData) => {
  try {
    await AuthApi.signin(data);
    await UserActions.getUser();
    await ChatActions.getAllChats()
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
