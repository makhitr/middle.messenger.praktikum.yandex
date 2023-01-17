import { Block } from "../../services/Block";
import template from "./index.hbs";

class ChatsList extends Block {
  constructor(props = {}) {
    super("div", "list-wrapper", props);
  }

  render() {
    return this.compile(template);
  }
}

export { ChatsList };
