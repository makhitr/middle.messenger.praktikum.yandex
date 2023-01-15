import { Block } from "../../services/Block";
import template from "./index.hbs";

type MessageLayoutProps = {
  [key: string]: string | Block;
};
class MessageLayout extends Block {
  constructor(props: MessageLayoutProps) {
    super("main", "main-wrapper", props);
  }

  render() {
    return this.compile(template);
  }
}

export { MessageLayout };
