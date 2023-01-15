import { Message } from "../../../types/messegeTypes";
import { IState } from "../../../types/stateTypes";
import { SocketEvent, WSTransport } from "../../../utils/WSTransport";
import Store from "../Store";
enum MessageType {
  USER_CONNECTED = "user connected",
}

const store = new Store();

const connect = async (chatId: number, token: string) => {
  const state: IState = store.getState();

  // if (state.transports && state.transports[chatId]) {
  //   return;
  // }
  const userId = state.user?.id;

  // const transports = state.transports ?? new Map();

  const wsTransport = new WSTransport(
    `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`
  );

  await wsTransport.connect();

  wsTransport.on(SocketEvent.Message, (message) => {
    if (message.type !== MessageType.USER_CONNECTED) {
      onMessageReceived(chatId, message);
    }
    return;
  });

  wsTransport.on(SocketEvent.Close, () => onConnectionClosed(chatId));

  store.set(`transports.${chatId}`, wsTransport);
};

const onConnectionClosed = (id: number) => {
  store.remove(`transports${[id]}`);
};

const onMessageReceived = (chatId: number, message: Message | Message[]) => {
  const state: IState = store.getState();
  let type;

  if (Array.isArray(message)) {
    type = "messages";
  } else {
    type = message.type;
  }

  const oldMessages = (state.messages || {})[chatId] || [];

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

const sendMessage = (content: string) => {
  const state: IState = store.getState();
  const chatId = state.selectedChat;

  if (!state.transports) {
    throw new Error("Connection is not established yet");
  }

  const transport: WSTransport = state.transports[chatId as number];
  transport.send({ type: "message", content });
};

const closeAll = () => {
  store.removeState();
  // const state: IState = store.getState();

  // Object.values(state.transports).forEach((transport) => {

  //   return transport.close()
  // });
};

export { connect, onMessageReceived, getOldMessages, sendMessage, closeAll };
