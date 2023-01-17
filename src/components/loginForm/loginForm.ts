import { Block } from "../../services/Block";
import template from "./index.hbs";

class LoginForm extends Block {
  constructor(props = {}, className = "login-form", method = "post") {
    super("form", className, props);
    this._element?.setAttribute("method", method);
  }

  render() {
    return this.compile(template);
  }
}

export { LoginForm };
