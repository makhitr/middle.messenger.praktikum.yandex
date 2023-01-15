import { Connect } from "../../services/Store/Connect";
import { IState } from "../../types/stateTypes";
import { RegisterPage } from "./registerPage";
export default Connect(RegisterPage, (state: IState) => state.user ?? {});
