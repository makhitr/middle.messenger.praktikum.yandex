import {  Block } from "../../services/Block";
import template from "./index.hbs";

interface ButtonProps {
  text: string
}

class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps, type = "button", className = "button") {
    super("button", className, props);
    this._element?.setAttribute('type', type)
  }

  render() {
    return this.compile(template);
  }
}

export { Button };
