import { Connect } from "../../services/Store/Connect";
import { IState } from "../../types/stateTypes";
import { Chat } from "./chat";

// export default Connect(Chat, (state: IState) => state.selectedChat ?? {});
export default Connect(Chat, (state: IState) => ({
  selectedChat: (state.chats || []).find(({ id }) => id === state.selectedChat),
}));