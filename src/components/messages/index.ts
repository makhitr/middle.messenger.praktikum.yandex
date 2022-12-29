import { Block } from "../../services/Block";
import { MessageForm } from "../messageForm";
import template from "./index.hbs";

class Messages extends Block {
  constructor(props: {} | undefined) {
    super("section", "message-wrapper", {
      ...props,
      messages: {},
      form: new MessageForm({}),
    });
  }

  render() {
    return this.compile(template);
  }
}

export { Messages };
