import { Block } from "../../services/Block";
import template from "./index.hbs";
import * as MessagesActions from "../../services/Store/actions/MessagesActions";
import { MessageForm } from "../messageForm";
import  MessagesList  from "../messagesList";

class Messages extends Block {
  constructor(props: {} | undefined) {
    super("section", "message-section-wrapper", {
      ...props,
      messages: new MessagesList(),
      form: new MessageForm({
        events: {
          submit: (event: Event) => {
            const form = event.target as HTMLFormElement;
            const value = (form[1] as HTMLInputElement).value;
            event.preventDefault();
            MessagesActions.sendMessage( value);
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
