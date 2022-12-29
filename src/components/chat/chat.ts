import { Block } from "../../services/Block";

import template from "./index.hbs";

class Chat extends Block {
  constructor(props = {}) {
    console.log('props', props)
    super("div", "chat-wrapper", props);
  }

  render(): DocumentFragment {
    return this.compile(template, {...this._props,  isSelected: this._props.id === this._props.selectedChat?.id});
  }
}

export { Chat };
