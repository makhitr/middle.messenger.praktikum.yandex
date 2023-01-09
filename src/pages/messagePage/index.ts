import { Connect } from "../../services/Store/Connect";
import { IState } from "../../types/stateTypes";
import { MessagePage } from "./MessagePage";


export default Connect(MessagePage, (state: IState) => {

  return state.chats ?? [];
});
