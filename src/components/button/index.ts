import { AllProps, Block } from "../../services/Block";
import template from "./index.hbs";

class Button extends Block {
  constructor(props: AllProps, className = "button") {
    super("button", className, props);
  }

  render() {
    return this.compile(template);
  }
}

export { Button };
