import { Connect } from "../../services/Store/Connect";
import { IState } from "../../types/stateTypes";
import { MainPage } from "./mainPage";

export default Connect(MainPage, (state: IState) => state.user ?? {});
