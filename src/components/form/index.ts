import { AllProps, Block } from "../../services/Block";
import template from "./index.hbs";

class Form extends Block {
  constructor(props: AllProps, className = "page-form") {
    super("form", className, props);
  }

  render() {
    return this.compile(template);
  }
}

export { Form };
