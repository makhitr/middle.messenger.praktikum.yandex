import { Block } from "../../services/Block";
import template from "./index.hbs";


class MessagesList extends Block {
  constructor(props = {}) {
    super("div", "messages", props);
  }

  render() {
    return this.compile(template);
  }
}

export { MessagesList };
