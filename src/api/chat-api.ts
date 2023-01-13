import { HTTPTransport } from "../services/HTTPTransport";
import { BaseAPI } from "./base-api";

const chatApiInstanse = new HTTPTransport();

export interface addUsersData {
  users: number[];
  chatId: number;
}

class ChatApi extends BaseAPI {
  create(title: string) {
    return chatApiInstanse.post("chats", {
      data: { title },
    });
  }

  request() {
    return chatApiInstanse.get("chats");
  }

  addUsers(data: addUsersData) {
    return chatApiInstanse.put("chats/users", {
      data,
    });
  }

  async getToken(chatId: number) {
    return chatApiInstanse.post(`chats/token/${chatId}`);
  }
}

export { ChatApi };
