import Block from "../../services/Block";
import template from './index.hbs'


type InputProps = {

}

class CustomInput extends Block {

  constructor(props: InputProps, className: string = "input-wrapper") {
    super('div', className, props)
  }

  render() {
    return this.compile(template);
  }

}

export default CustomInput