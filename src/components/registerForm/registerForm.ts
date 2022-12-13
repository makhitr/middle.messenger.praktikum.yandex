import { AllProps, Block } from "../../services/Block";
import template from "./index.hbs";

class RegisterForm extends Block {
  constructor(props = {}, className = "register-form", method = "post") {
    super("form", className, props);
    this._element?.setAttribute("method", method);
  }

  componentDidUpdate(oldProps: AllProps, newProps: AllProps): boolean {

    return true;
  }
  render() {

    return this.compile(template);
  }
}

export { RegisterForm };
