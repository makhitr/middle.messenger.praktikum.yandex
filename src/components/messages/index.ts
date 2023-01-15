import { Connect } from "../../services/Store/Connect";
import { IState } from "../../types/stateTypes";
import { Messages } from "./messages";

export default Connect(Messages, (state: IState) => {
  return state.messages;
});
