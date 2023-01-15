import { Block } from "../../services/Block";
import template from "./index.hbs";
import  MessagesList  from "../messagesList";

class Messages extends Block {
  constructor(props: {} | undefined) {
    super("section", "message-section-wrapper", {
      ...props,
      messages: new MessagesList(),

    });
  }

  render() {
    return this.compile(template);
  }
}

export { Messages };
