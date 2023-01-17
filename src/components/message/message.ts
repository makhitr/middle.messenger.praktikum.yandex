import {  Block } from "../../services/Block";
import template from './index.hbs'

interface MessageProps {
  content: string;
  isMine: boolean;
}

class Message extends Block<MessageProps> {
  constructor(props: MessageProps) {
    const { isMine } = props
    const className = isMine ? "message-view-wrapper-user" : "message-view-wrapper"
    
    super('div', className, props)
  }
  
  render() {
    return this.compile(template)
  }

}

export { Message} 
