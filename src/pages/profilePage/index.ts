import { Connect } from "../../services/Store/Connect";
import { IState } from "../../types/stateTypes";
import { ProfilePage } from "./profilePage";

export default Connect(ProfilePage, (state: IState) => state.user ?? {});
