import { Connect } from "../../services/Store/Connect";
import { IState } from "../../types/stateTypes";
import MessagesList  from "../messagesList";
import { Messages } from "./messages";

export default Connect(Messages, (state: IState) => {
  return {
    messages: new MessagesList(),
  } 
});
