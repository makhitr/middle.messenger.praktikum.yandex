import { Message } from "./messegeTypes";
import { User } from "./userTypes";

export interface  IState  {
  chats?: string[];
  avatar?: string,
  user?: User,
  selectedChat?: number,
  transports?: [],//??? like messages
  messages?: Record<number, Message[]>
}
