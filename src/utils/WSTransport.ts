import { EventBus } from "../services/EventBus";

export enum SocketEvent {
  Message = "message",
}

class WSTransport extends EventBus {
  private socket: WebSocket | null = null;

  constructor(private url: string) {
    super();
  }

  connect() {
    this.socket = new WebSocket(this.url);
    
    this.subscribe(this.socket);

    return new Promise((resolve, reject) => {
      this.socket!.addEventListener('open', resolve);
      this.socket!.addEventListener('close', reject)
    })
  }

 send(data: unknown) {
    if (!this.socket) {
      throw new Error("WebSocket connection is not established yet");
    }
    this.socket.send(JSON.stringify(data));
  }

  subscribe(socket: WebSocket) {
    socket.addEventListener("message", (message) => {
      console.log('message', message.data)
      const data = JSON.parse(message.data);
      if (data?.type === "pong") {
        return;
      }
      this.emit(SocketEvent.Message, data);
    });
  }
}

export { WSTransport };
