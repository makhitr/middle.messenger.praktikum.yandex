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
        data: { title: data },
      })
      .then((data: XMLHttpRequest) => data.response);
  }

  request() {
    return chatApiInstanse.get("chats");
  }

  addUsers(data: addUsersData) {
    return chatApiInstanse.put("chats/users", {
      headers: {
        "content-type": "application/json",
      },
      data: data,
    });
  }

  getToken(chatId: number) {
    console.log("getToken", chatId);
    return chatApiInstanse
      .post(`chats/token/${chatId}`)
      .then((res: XMLHttpRequest) => {
        return JSON.parse(res.response);
      })
      .then((data) => {
        console.log(data.token);
        return data.token;
      });
  }
}

export { ChatApi };
