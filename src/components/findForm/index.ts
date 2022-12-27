import { Form } from "../form";
import template from "./index.hbs";

class FindForm extends Form {
  constructor(props: { [x: string]: any }, id: string) {
    super(props, "find-form");
    if (this._element) this._element.setAttribute("id", id);
  }

  render() {
    return this.compile(template);
  }
}

export { FindForm };
