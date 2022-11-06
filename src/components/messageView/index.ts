import Block from "../../services/Block";
import template from './index.hbs'


class MessageView extends Block {
  constructor(props, className = "message-view-wrapper") {
    console.log('pr', props)
    super('div', className, props)
  }
  render() {
   return this.compile(template)
  }

}

export default MessageView