import { AllProps, Block } from "../../services/Block";
import template from "./index.hbs";

class Button extends Block {
  constructor(props: AllProps, type = "button", className = "button") {
    super("button", className, props);
    this._element?.setAttribute('type', type)
  }

  render() {
    return this.compile(template);
  }
}

export { Button };
