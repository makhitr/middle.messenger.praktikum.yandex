import { AllProps, Block } from "../../services/Block";
import template from "./index.hbs";

class LoginForm extends Block {
  constructor(props = {}, className = "login-form", method = "post") {
    super("form", className, props);
    this._element?.setAttribute("method", method);
  }

  componentDidUpdate(oldProps: AllProps, newProps: AllProps): boolean {
    // console.log("🚀 ~ Form ~ newProps", newProps)
    // console.log("🚀 ~ Form ~ oldProps", oldProps)
    // console.log("🚀 ~ Form ~ componentDidUpdate form");

    return true;
  }
  render() {
    // console.log("🚀 ~ Form ~ render");

    return this.compile(template);
  }
}

export { LoginForm };
