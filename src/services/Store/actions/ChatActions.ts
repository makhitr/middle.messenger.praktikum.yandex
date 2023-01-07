import { addUsersData, ChatApi } from "../../../api/chat-api";
import * as MessagesActions from "../../../services/Store/actions/MessagesActions";
import Store from "../Store";
const chatApi = new ChatApi();
const store = new Store();

const createChat = async (data) => {
  await chatApi.create(data);
  getAllChats();
};

const getAllChats = async () => {
  //добавить обработку параметров
  const data = await chatApi.request();
  const chats = JSON.parse(data.response);

  chats.map(async (chat) => {
    const token = await chatApi.getToken(chat.id);
    await MessagesActions.connect(chat.id, token);
  });
  store.set("chats", chats);
};

const selectChat = (chatId: number) => {
  store.set("selectedChat", chatId);
};

const addUsersToChat = (data: addUsersData) => {
  chatApi
    .addUsers(data)
    .then((data: XMLHttpRequest) => console.log(data.response));
};

const getToken = async (id: number) => {
  console.log("get token id", id);
  await chatApi.getToken(id);
};

export { createChat, getAllChats, addUsersToChat, selectChat, getToken };
