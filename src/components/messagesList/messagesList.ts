import { Block } from "../../services/Block";
import { Form } from "../form";
import template from "./index.hbs";

interface MessagesListProps {
  messages: [] | null;
  form: Form;
  selectedChat: number;
}

class MessagesList extends Block<MessagesListProps> {
  constructor(props: MessagesListProps) {
    super("div", "messages", props);
  }

  render() {
    return this.compile(template);
  }
}

export { MessagesList };
