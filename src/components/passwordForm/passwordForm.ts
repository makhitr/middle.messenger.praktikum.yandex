import { AllProps, Block } from "../../services/Block";
import template from "./index.hbs";

class PasswordForm extends Block {
  constructor(props = {}, className = "password-form", method = "post") {
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

export { PasswordForm };
