import { Connect } from "../../services/Store/Connect";
import { ChatsList } from "./chatsList";
import { IState } from "../../types/stateTypes";
import * as ChatActions from "../../services/Store/actions/ChatActions";
import * as MessagesActions from "../../services/Store/actions/MessagesActions";
import Chat from "../chat";

export default Connect(ChatsList, (state: IState) => {
  const chats = state.chats?.map((chat) => {
    return new Chat({
      title: chat.title,
      count: chat.unread_count,
      id: chat.id,
      events: {
        click: () => {
          ChatActions.selectChat(chat.id);
          MessagesActions.getOldMessages(chat.id);
        },
      },
    });
  });

  return {
    chats: chats,
  };
});
