import { HTTPTransport } from "../services/HTTPTransport";
import { BaseAPI } from "./base-api";

const chatApiInstanse = new HTTPTransport();

export interface CreateChatData {
  title: string;
}

export interface addUsersData {
  users: [];
  chatId: number;
}

class ChatApi extends BaseAPI {
  create(data: CreateChatData) {
    return chatApiInstanse
      .post("chats", {
        headers: {
          "content-type": "application/json",
        },
        data: { "title": data },
      })
      .then((data: XMLHttpRequest) => data.response)
    
  }

  request() {
    return chatApiInstanse.get("/chats");
  }

  addUsers(data: addUsersData) {
    return chatApiInstanse.put("chats/users", {
      headers: {
        "content-type": "application/json",
      },
      data: data,
    });
  }
}

export { ChatApi };
