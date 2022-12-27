import { Block } from "../../services/Block";
import { Button } from "../button";
import ChatsList from "../../components/chatsList";

import { FindForm } from "../findForm";
import { CustomInput } from "../input";
import template from "./index.hbs";
import * as ChatActions from "../../services/Store/actions/ChatActions";


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
    
    });
  }


  render() {
    return this.compile(template);
  }
}

export { AsideList };
