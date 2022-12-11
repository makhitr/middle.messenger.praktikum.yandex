import { AllProps, Block } from "../../services/Block";
import template from "./index.hbs";

class CustomInput extends Block {
  constructor(props: AllProps, className = "input-wrapper", image?) {
    super("div", className, props);

    if (this._element ) {
     this._element.style.backgroundImage = `url(${image})`;
     this._element.style.backgroundSize = "cover";
    }  
  }

  componentDidUpdate(oldProps: AllProps, newProps: AllProps): boolean {
    return true;
  }
  render() {
    return this.compile(template);
  }
}

export { CustomInput };
