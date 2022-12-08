import { AllProps, Block } from "../../services/Block";
import template from "./index.hbs";

class CustomInput extends Block {
  constructor(props: AllProps, className = "input-wrapper") {
    super("div", className, props);
  }
  
  componentDidUpdate(oldProps: AllProps, newProps: AllProps): boolean {
    console.log("🚀 ~ CustomInput ~ newProps", newProps)
    console.log("🚀 ~ CustomInput ~ oldProps", oldProps)
    console.log("🚀 ~ CustomInput ~ componentDidUpdate CustomInput");

    return true;
  }
  render() {
    return this.compile(template);
  }
}

export { CustomInput };
