import { EventBus } from "../EventBus";

type Indexed<T = unknown> = {
  [k in string | symbol]: T;
};

export enum StoreEvents {
  Updated = "updated",
}

class Store extends EventBus {
  static EVENT_UPDATE = "";
  static STORE_NAME = "myAppStore";
  
  static _instance: Store;
  static isAuth = false;
  _state: Indexed = {};

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

  set(id: string, value: object) {
    console.log('id', id, 'value', value)

    this._state[id] = value;
    this.emit(Store.EVENT_UPDATE);
    return this;
  }

  removeState() {
    this._state = {};
    this.emit(Store.EVENT_UPDATE);
  }
}
export default Store;
