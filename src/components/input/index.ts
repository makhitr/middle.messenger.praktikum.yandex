import { AllProps, Block } from "../../services/Block";
import template from "./index.hbs";

class CustomInput extends Block {
  constructor(props: AllProps, className = "input-wrapper") {
    super("div", className, props);
  }

  render() {
    return this.compile(template);
  }
}

export { CustomInput };
