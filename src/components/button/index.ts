import { Block } from "../../services/Block";
import template from './index.hbs'

class Button extends Block {
  constructor(props, className: string = "button") {

    super('button', className, props)

  }

  render() {
    return this.compile(template)
  }
}

export { Button } 