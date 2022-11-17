type Listeners = {
  [key: string]: Array<Function>
}


class EventBus {
  listeners: Listeners 

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: () => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  off(event: string, callback: () => void) {
    if (!this.listeners[event]) {
      throw new Event(`Нет события: ${event}`);
    }
    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    );
  }

  emit<T >(event: string, ...args: T[]) {
    if (!this.listeners[event]) {
      throw new Event(`Нет события: ${event}`);
    }
    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}

export {EventBus};

