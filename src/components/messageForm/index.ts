
import Form from "../form";
import template from './index.hbs'

class MessageForm extends Form {
  constructor(props: { [x: string]: any; }, id = 'mss-form') {
    super(props, 'message-form')
    this._element.setAttribute('id', id)
  }

  render() {
    return this.compile(template)
  }

}

export default MessageForm;
