import { Connect } from "../../services/Store/Connect";
import { IState } from "../../types/stateTypes";
import { Messages } from "./messages";


// export default Connect(Chat, (state: IState) => state.selectedChat ?? {});
export default Connect(Messages, (state: IState) => {
  

return  ({
messages: state.messages ?? {}
  // selectedChat: state.selectedChat ?? {}
    // selectedChat: (state.chats || []).find(
    //   ({ id }) => id === state.selectedChat
    // ),
  });
});
