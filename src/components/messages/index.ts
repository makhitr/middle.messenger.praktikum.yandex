import { Block } from "../../services/Block";
import template from './index.hbs'

class Messages extends Block  {
  
  constructor(props: {} | undefined) {
    super('div', 'messages-wrapper', props)
  }

  render() {
    return this.compile(template);

  }
} 

export {Messages};