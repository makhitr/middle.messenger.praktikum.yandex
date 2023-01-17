import { Connect } from "../../services/Store/Connect";
import { MessagesList } from "./messagesList";
import { IState } from "../../types/stateTypes";
import { Message } from "../message/message";
import { MessageForm } from "../messageForm";
import * as MessagesActions from "../../services/Store/actions/MessagesActions";
import { validateOnFocus } from "../../utils/validateForm";

export default Connect(MessagesList, (state: IState) => {
  const chatId = state.selectedChat; //635

  const stateMessages = state.messages ?? {};

  const submitForm = (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form[0] as HTMLInputElement;

    if (input.value === "") {
      const errorMessage = input.parentElement
        ?.nextElementSibling as HTMLElement;
      errorMessage.style.display = "block";
      input.style.background = "#ea7d7d";
    } else {
      MessagesActions.sendMessage(input.value);
      form.reset();
    }
  };

  const form = new MessageForm({
    events: {
      focus: validateOnFocus,
      submit: submitForm,
    },
    capture: true,
  });
  if (!chatId) {
    return {
      messages: [],
    };
  }

  const allChats = stateMessages[chatId] ?? [];

  let messages;

  if (allChats.length === 0) {
    return {
      messages: false,
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
