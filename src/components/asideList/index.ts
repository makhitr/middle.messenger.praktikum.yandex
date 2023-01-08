import { Block } from "../../services/Block";
import { Button } from "../button";
import ChatsList from "../../components/chatsList";

import { FindForm } from "../findForm";
import { CustomInput } from "../input";
import * as ChatActions from "../../services/Store/actions/ChatActions";
import * as AuthActions from "../../services/Store/actions/AuthActions";
import template from "./index.hbs";

import { Form } from "../form";

const handleSubmit = (event: Event) => {
  event.preventDefault();
  ChatActions.createChat(event.target[0].value);
};

const submitForm = {
  submit: handleSubmit,
};

class AsideList extends Block {
  constructor(props: {} | undefined) {
    super("aside", "aside-wrapper", {
      ...props,
      form: new FindForm(
        {
          input: new CustomInput({
            type: "text",
            required: false,
            value: "",
            text: "Find Me",
            name: "find",
            className: "find-input",
          }),
          button: new Button({ text: "find" }, "button", "find-input-btn"),
        },
        "id-find-form"
      ),
      addChatForm: new Form(
        {
          inputs: new CustomInput({
            type: "text",
            value: "",
            text: "",
            name: "title",
            className: "input",
          }),
          button: new Button({ text: "Create Chat" }, "submit", "submit-btn"),
          events: submitForm,
        },
        "chat-form"
      ),
      chatsList: new ChatsList({}),
      getChatsBtn: new Button({
        text: "Get All Chats",
        events: {
          click: () => ChatActions.getAllChats(),
        },
      }),
      addUsersToChat: new Button({
        text: "Add User to Chats",
        events: {
          click: () => ChatActions.addUsersToChat({ users, chatId }),
        },
      }),
      logoutBtn: new Button({
        text: "logout",
        events: {
          click: () => AuthActions.logoutUser(),
        },
      }),
    });
  }

  render() {
    return this.compile(template);
  }
}

export { AsideList };
