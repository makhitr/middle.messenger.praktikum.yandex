import { Block } from "../../services/Block";
import template from "./index.hbs";
import * as MessagesActions from "../../services/Store/actions/MessagesActions";
import { MessageForm } from "../messageForm";

class Messages extends Block {
  constructor(props: {} | undefined) {
    super("section", "message-wrapper", {
      ...props,
      messages: {},
      form: new MessageForm({
        events: {
          submit: (event: Event) => {
            const form = event.target as HTMLFormElement;
            const value = (form[1] as HTMLInputElement).value;
            event.preventDefault();
            MessagesActions.sendMessage(635, value);
            form.reset();
          },
        },
      }),
    });
  }

  render() {
    return this.compile(template);
  }
}

export { Messages };
