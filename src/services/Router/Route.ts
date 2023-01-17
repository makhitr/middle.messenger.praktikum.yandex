import isEqual from "../../utils/isEqual";
import { renderDOM } from "../../utils/renderDOM";
import { Block } from "../Block";

class Route {
  _pathname: string;
  _blockClass;
  _block: Block | null;
  _props;

  constructor(pathname: string, view, props = {}) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass(this._props);
      renderDOM(this._props.rootQuery, this._block);
      return;
    }

    this._block.show();
  }
}

export { Route };
