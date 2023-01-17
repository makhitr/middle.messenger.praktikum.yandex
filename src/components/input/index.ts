import { Block } from "../../services/Block";
import template from "./index.hbs";

class CustomInput extends Block {
  constructor(props = {}, className = "input-wrapper", image?: string) {
    super("div", className, props);
    if (image) {
      this.element!.style.backgroundImage = `url("https://ya-praktikum.tech/api/v2/resources${image}")`;
      this.element!.style.backgroundSize = '100px'
    }
  }

  render() {
    return this.compile(template);
  }
}

export { CustomInput };
