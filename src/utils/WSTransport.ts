import { EventBus } from "../services/EventBus";

export enum SocketEvent {
  Message = "message",
  Close = "close",
  Connected = "connected",
  Error = "error",
}

enum MessageDataType {
  PONG = "pong",
  USER_CONNECTED = "user connected",
}

class WSTransport extends EventBus {
  private socket: WebSocket | null = null;
  private interval = 0;

  constructor(private url: string) {
    super();
  }

  connect(): Promise<void> {
    this.socket = new WebSocket(this.url);

    this.subscribe(this.socket);

    this.setupPingPong();
    return new Promise((resolve) => {
      this.on(SocketEvent.Connected, () => {
        resolve();
      });
    });
  }

  public send(data: unknown) {
    if (!this.socket) {
      throw new Error("WebSocket connection is not established yet");
    }
    this.socket.send(JSON.stringify(data));
  }

  private setupPingPong() {
    this.interval = setInterval(() => {
      this.send({ type: "ping" });
    }, 5000);

    this.on(SocketEvent.Close, () => {
      clearInterval(this.interval);

      this.interval = 0;
    });
  }

  subscribe(socket: WebSocket) {
    socket.addEventListener("open", () => {
      this.emit(SocketEvent.Connected);
    });

    socket.addEventListener("close", () => {
      "from subscribe close listener";
      this.emit(SocketEvent.Close);
    });

    socket.addEventListener("error", (e) => {
      this.emit(SocketEvent.Error, e);
    });

    socket.addEventListener("message", (message) => {
      const data = JSON.parse(message.data);
      if ((Boolean(data.type)) && (data.type === MessageDataType.PONG || data.type === MessageDataType.USER_CONNECTED)
      ) {
        return;
      }
      this.emit(SocketEvent.Message, data);
    });
  }

  public close() {
    this.socket?.close();
  }
}

export { WSTransport };
