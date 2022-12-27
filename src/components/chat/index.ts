import { Connect } from "../../services/Store/Connect";
import { IState } from "../../types/stateTypes";
import { Chat } from "./chat";

export default Connect(Chat, (state: IState) => state.chats ?? {});
