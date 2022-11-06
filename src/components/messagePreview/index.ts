import Block from "../../services/Block";
import template from './index.hbs'

class MessagePreview extends Block {
  constructor(props) {
    super('div', 'message-pr-wrapper', props)
  }

  render() {
    return this.compile(template)
  }
}

export default MessagePreview;


