import { Form } from "../form";
import template from "./index.hbs";

class MessageForm extends Form {
  constructor(props: { [x: string]: any }, id = "mss-form") {
    super(props, "message-form");
    if (this._element) this._element.setAttribute("id", id);
  }

  render() {
    return this.compile(template);
  }
}

export { MessageForm };
