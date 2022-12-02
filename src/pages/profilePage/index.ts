import { Connect } from "../../services/Store/Connect";
import { ProfilePage } from "./profilePage";

export default Connect(ProfilePage, (state) => state.user ?? {});
