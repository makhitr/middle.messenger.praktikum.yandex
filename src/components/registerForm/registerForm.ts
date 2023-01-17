import { Block } from "../../services/Block";
import template from "./index.hbs";

class RegisterForm extends Block {
  constructor(props = {}, className = "register-form", method = "post") {
    super("form", className, props);
    this._element?.setAttribute("method", method);
  }

  render() {
    return this.compile(template);
  }
}

export { RegisterForm };
