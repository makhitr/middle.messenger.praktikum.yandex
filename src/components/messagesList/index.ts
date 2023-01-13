import { Connect } from "../../services/Store/Connect";
import { MessagesList } from "./messagesList";
import { IState } from "../../types/stateTypes";
import { Message } from "../message/message";

export default Connect(MessagesList, (state: IState) => {
  console.log(state);
  const chatId = state.selectedChat; //635
  // console.log(state.messages)

  // if (typeof state.messages === "undefined") {
  //   return;
  // }

  const stateMessages = state.messages ?? {}

  if (!chatId) {
    return {
      messages: [],
      // selectedChat: undefined,
      // userId: state.user.id
    };
  }

  const allChats = stateMessages[chatId] ?? [];

  // const messages = (state.messages[chatId] || []).map((message) => {
  const messages = allChats.map((message) => {
    return new Message({ isMine: +message.user_id === state.user?.id, content: message.content });
  });

  // console.log(chatId, messages);
  return {
    messages: messages,
    chatId: chatId,
  };
});
