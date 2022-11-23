import TestBlock from "./TestBlock";

class Chats extends TestBlock {
  getContent() {
    return "chats";
  }

  show() {
    console.log("show chats");
  }

  hide() {
    console.log("hide chats");
  }
}

class Users extends TestBlock {
  getContent() {
    return "users";
  }

  show() {
    console.log("show users");
  }

  hide() {
    console.log("hide users");
  }
}

export { Users, Chats };
