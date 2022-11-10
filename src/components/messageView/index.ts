import { Block } from "../../services/Block";
import template from './index.hbs'


class MessageView extends Block {
  constructor(props: {} | undefined, className = "message-view-wrapper") {
    super('div', className, props)
  }
  render() {
    return this.compile(template)
  }

}

export { MessageView }
