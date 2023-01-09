import { addUsersData, ChatApi } from "../../../api/chat-api";
import * as MessagesActions from "../../../services/Store/actions/MessagesActions";
import Store from "../Store";
const chatApi = new ChatApi();
const store = new Store();

const createChat = async (title: string) => {
  await chatApi.create(title);
  getAllChats();
};

const getAllChats = async () => {
  //добавить обработку параметров
  let chats = await chatApi.request();

  if (Array.isArray(chats)) {
    chats.map(async (chat) => {
      const token = await getToken(chat.id);
      await MessagesActions.connect(chat.id, token);
    });
  } else {
    chats = [];
  }
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
  const data = await chatApi.getToken(id);
  return data.token;
};

export { createChat, getAllChats, addUsersToChat, selectChat, getToken };
