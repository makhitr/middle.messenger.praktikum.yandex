import { User } from "./userTypes";

export interface  IState  {
  chats?: string[];
  avatar?: string,
  user?: User,
  selectedChat?: number,
  transport?: [],
  messages?: []
}
