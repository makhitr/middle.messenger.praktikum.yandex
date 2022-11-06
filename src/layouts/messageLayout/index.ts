import Block from "../../services/Block";
import template from './index.hbs'

class MessageLayout extends Block {

  constructor(props: any) {
    super('main', 'main-wrapper', props)
  }

  render() {
    console.log('Layout render', this._props)

    return this.compile(template)

  }

}

export default MessageLayout;