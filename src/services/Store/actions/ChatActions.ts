import { addUsersData, ChatApi, CreateChatData } from "../../../api/chat-api";
import Store from "../Store";
const chatApi = new ChatApi();

const store = new Store();

const createChat = async (data) => {
  await chatApi.create(data);
  getAllChats();
};

const getAllChats = () => {
  //добавить обработку параметров
  chatApi.request()
  .then((data: XMLHttpRequest) => {
    store.set("chats", JSON.parse(data.response));
  })

};

const addUsersToChat = (data: addUsersData) => {
  chatApi
    .addUsers(data)
    .then((data: XMLHttpRequest) => console.log(data.response));
};

export { createChat, getAllChats, addUsersToChat };
