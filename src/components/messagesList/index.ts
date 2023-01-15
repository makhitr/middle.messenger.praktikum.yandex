import { Connect } from "../../services/Store/Connect";
import { MessagesList } from "./messagesList";
import { IState } from "../../types/stateTypes";
import { Message } from "../message/message";
import { MessageForm } from "../messageForm";
import * as MessagesActions from "../../services/Store/actions/MessagesActions";

export default Connect(MessagesList, (state: IState) => {
  const chatId = state.selectedChat; //635

  const stateMessages = state.messages ?? {};
  const form = new MessageForm({
    events: {
      submit: (event: Event) => {
        const form = event.target as HTMLFormElement;
        const value = (form[1] as HTMLInputElement).value;
        event.preventDefault();
        MessagesActions.sendMessage(value);
        form.reset();
      },
    },
  })
  if (!chatId) {
    return {
      messages: [],
    };
  }

  const allChats = stateMessages[chatId] ?? [];

  let messages;

  if (allChats.length === 0) {
    return {
      messages: null,
      form: form,
      selectedChat: state.selectedChat,
    };
  } else {
    messages = allChats.map((message) => {
      return new Message({
        isMine: +message.user_id === state.user?.id,
        content: message.content,
      });
    });
  }
  return {
    messages: messages,
    form: form,
    selectedChat: state.selectedChat,
  };
});
