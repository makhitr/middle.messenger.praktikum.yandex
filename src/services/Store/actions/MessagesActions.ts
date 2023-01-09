import { Message } from "../../../types/messegeTypes";
import { IState } from "../../../types/stateTypes";
import { SocketEvent, WSTransport } from "../../../utils/WSTransport";
import Store from "../Store";

const store = new Store();

const connect = async (chatId: number, token: string) => {
  const state: IState = store.getState();
  // console.log(state, "state");

  const userId = state.user?.id;
  // const transports = state.transports ?? new Map();

  const wsTransport = new WSTransport(
    `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`
  );

  await wsTransport.connect();
  wsTransport.on(SocketEvent.Message, (message) =>
    receivedMessage(chatId, message)
  );

  store.set(`transports.${chatId}`, wsTransport);
};

const receivedMessage = (chatId: number, message: Message | Message[]) => {
  const state: IState = store.getState();
  let type;

  if (Array.isArray(message)) {
    type = "messages";
  } else {
    type = message.type;
  }

  const messagesState = state.messages;
  const oldMessages = messagesState ? messagesState[chatId] : [];

  switch (type) {
    case "message": {
      store.set(`messages.${chatId}`, [...oldMessages, message]);
      break;
    }
    case "messages": {
      store.set(`messages.${chatId}`, [
        ...oldMessages,
        ...(message as Message[]),
      ]);
      break;
    }
  }

  store.set(`messages.${chatId}`, message);
};

const getOldMessages = (chatId: number) => {
  const state: IState = store.getState();
  if (!state.transports) {
    throw new Error("Connection is not established yet");
  }
  const transport: WSTransport = state.transports[chatId];
  transport.send({ type: "get old", content: "0" });
};

const sendMessage = (chatId: number, content: string) => {
  const state: IState = store.getState();
  if (!state.transports) {
    throw new Error("Connection is not established yet");
  }
  const transport: WSTransport = state.transports[chatId];

  transport.send({ type: "message", content });
};

export { connect, receivedMessage, getOldMessages, sendMessage };
