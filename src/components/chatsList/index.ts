import { Connect } from "../../services/Store/Connect";
import { ChatsList } from "./chatsList";
import { IState } from "../../types/stateTypes";
import  Chat  from "../chat";


export default Connect(ChatsList, (state: IState) => { 
  // return state.chats ?? {}


  // // const chats = new Chat({})
  // // const chats = [new Chat({}), new Chat({})]
  const numbers = [1, 2, 3, 4]
  const chats = state.chats.map(
    (chat) => {
      // console.log(chat)
        return new Chat({title: chat.title, count: chat.unread_count})}
  );

  return {
  //   // form: form,
    chats: chats,
    nums: numbers
  };
});
