import { Block } from "../../services/Block";
import template from "./index.hbs";

class Form extends Block {
  constructor(props = {}, className = "page-form", method = "post") {
    super("form", className, props);
    this._element?.setAttribute("method", method);
  }

  render() {
    return this.compile(template);
  }
}

export { Form };
