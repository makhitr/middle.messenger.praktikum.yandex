import { Block } from "../../services/Block";
import template from './index.hbs'


class ErrorPage extends Block {
  constructor(props: any, className = "section-wrapper") {
    super('section', className, props)
  }

  render() {
    return this.compile(template)
  }
}

export {ErrorPage}
