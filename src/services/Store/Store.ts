import { set } from "../../utils/set";
import { EventBus } from "../EventBus";

export enum StoreEvents {
  EVENT_UPDATE = "event_update",
}

class Store extends EventBus {
  static EVENT_UPDATE = "event_update";
  static STORE_NAME = "myAppStore";

  static _instance: Store;
  _state = {};

  constructor() {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (Store._instance) return Store._instance;

    super();

    const savedState = localStorage.getItem(Store.STORE_NAME);

    this._state = savedState ? JSON.parse(savedState) ?? {} : {};

    Store._instance = this;

    this.on(Store.EVENT_UPDATE, () => {
      localStorage.setItem(Store.STORE_NAME, JSON.stringify(this._state));
    });
  }

  getState() {
    return this._state;
  }

  // set(path: string, value: unknown) {
  //   this.set(this.state, path, value);

  //   this.emit(StoreEvents.Updated);
  // }

  // set(id: string, value: object | number) {
  //   this._state[id] = value;
  //   this.emit(Store.EVENT_UPDATE);
  //   return this;
  // }

  public set(keypath: string, data: unknown) {
    set(this._state, keypath, data);
    this.emit(Store.EVENT_UPDATE, this.getState());
  }

  remove(id: string) {
    delete this._state[id];
  }

  removeState() {
    this._state = {};
    this.emit(Store.EVENT_UPDATE);
  }
}
export default Store;

//
