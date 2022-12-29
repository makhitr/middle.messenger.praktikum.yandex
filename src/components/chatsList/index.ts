import { Connect } from "../../services/Store/Connect";
import { ChatsList } from "./chatsList";
import { IState } from "../../types/stateTypes";
import * as ChatActions from "../../services/Store/actions/ChatActions";
import Chat from "../chat";

export default Connect(ChatsList, (state: IState) => {
 
  const chats = state.chats.map((chat) => {
    console.log('chat from new Chat', chat)
    return new Chat({
      title: chat.title,
      count: chat.unread_count,
      id: chat.id,
      events: {
        click: () => {
          ChatActions.selectChat(chat.id);
        },
      },
    });
  });

  return {
    chats: chats,
  };
});
