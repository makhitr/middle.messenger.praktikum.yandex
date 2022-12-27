import { Block } from "../../services/Block";
import { Button } from "../button";
import { Chat } from "../chat/chat";
import { Form } from "../form";
import * as ChatActions from "../../services/Store/actions/ChatActions";
import { CustomInput } from "../input";
import template from "./index.hbs";

const handleSubmit = (event: Event) => {
  event.preventDefault();
  ChatActions.createChat(event.target[0].value);
};

const submitForm = {
  submit: handleSubmit,
};

class ChatsList extends Block {
  constructor(props = {}) {
    super("div", "list-wrapper", props);

    this._children.form = new Form(
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
    );

    // this._children.chats = new Chat({title: "I am  chat"})
  }

  render() {
    return this.compile(template);
  }
}

export { ChatsList };
