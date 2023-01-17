import { Connect } from "../../services/Store/Connect";
import { IState } from "../../types/stateTypes";
import { Message } from "./message";

// export default Connect(Chat, (state: IState) => state.selectedChat ?? {});
export default Connect(Message, (state: IState) => {
  

return  ({
messages: state.messages ?? {}
  // selectedChat: state.selectedChat ?? {}
    // selectedChat: (state.chats || []).find(
    //   ({ id }) => id === state.selectedChat
    // ),
  });
});
