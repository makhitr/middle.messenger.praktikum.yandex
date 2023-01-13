import {  Block } from "../../services/Block";
import template from './index.hbs'

interface MessageProps {
  content: string;
  isMine: boolean;
}

class Message extends Block<MessageProps> {
  constructor(props:MessageProps) {
    super('div', "message-wrapper", props)
  }
  
  render() {
    return this.compile(template)
  }

}

export { Message} 
