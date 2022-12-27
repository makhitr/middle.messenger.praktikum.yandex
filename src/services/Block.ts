/* eslint-disable @typescript-eslint/no-empty-function */
import { v4 as makeUUID } from "uuid";
import { EventBus } from "./EventBus";

enum EVENTS {
  INIT = "init",
  FLOW_CDM = "flow:component-did-mount",
  FLOW_CDU = "flow:component-did-update",
  FLOW_RENDER = "flow:render",
}

interface IBlock {
  _element: null | HTMLDivElement | HTMLElement;
  _meta: null | Meta;
  _id: null | string;
  _eventBus: () => EventBus;
  _props: Props;
  _children: Children;
}
type PropsEvents = {
  [key: string]: (e: Event) => void;
};

type Props = {
  [key: string]: string | boolean;
};

type Children = {
  [key: string]: Block;
};

export type AllProps = Props | Children | PropsEvents;

type Meta = {
  tagName: string;
  className: string;
  props: { [key: string]: string };
};

class Block implements IBlock {
  _element: null | HTMLDivElement | HTMLElement;
  _meta;
  _id;
  _eventBus;
  _props;
  _children;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(
    tagName = "div",
    className: string,
    propsAndChildren: AllProps = {}
  ) {
    const eventBus: EventBus = new EventBus();
    const { children, props } = this._getChildren(propsAndChildren);
    this._children = this._makePropsProxy(children);
    this._props = this._makePropsProxy({ ...props, __id: this._id });

    this._meta = {
      tagName,
      className,
      props,
    };

    this._id = makeUUID();

    this._eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(EVENTS.INIT);
  }

  _getChildren(propsAndChildren: AllProps): { [key: string]: any } {
    const children: Children = {};
    const props: Props = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (
        Array.isArray(value) &&
        value.length > 0 &&
        value.every((v) => v instanceof Block)
      ) {
        children[key as string] = value;
      } else if (value instanceof Block) {
        children[key as string] = value;
      } else {
        props[key] = value;
      }

      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(EVENTS.INIT, this.init.bind(this));
    eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName, className } = this._meta;
    this._element = this._createDocumentElement(tagName, className);
  }

  init() {
    this._createResources();
    this.dispatchComponentDidMount();
    this._eventBus().emit(EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();
    // Object.values(this._children).forEach((child: Block) => {
    //   child.dispatchComponentDidMount();
    // });
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this._eventBus().emit(EVENTS.FLOW_CDM);

    Object.values(this._children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((ch) => {
          ch.dispatchComponentDidMount();
        });
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  _componentDidUpdate(oldProps: AllProps, newProps: AllProps) {
    // this.componentDidUpdate(oldProps, newProps);
    const isReRender = this.componentDidUpdate(oldProps, newProps);
    if (isReRender) {
      this._removeEvents();
      this._eventBus().emit(EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: AllProps, newProps: AllProps) {
    // this._removeEvents();

    // Object.assign(oldProps, newProps);
    // this._eventBus().emit(EVENTS.FLOW_RENDER);
    return true;
  }

  setProps = (nextProps: AllProps) => {
    if (nextProps === null) {
      return;
    }

    // if (
    //   JSON.stringify(Object.entries(this._props)) !==
    //   JSON.stringify(Object.entries(nextProps))
    // ) {
    //   this._eventBus().emit(EVENTS.FLOW_CDU, this._props, nextProps);
    // }

    const { children, props } = this._getChildren(nextProps);
  
    if (Object.values(children).length) Object.assign(this._children, children);

    if (Object.values(props).length) Object.assign(this._props, props);
  };

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render();

    this._removeEvents();
    if (this._element) {
      this._element.innerHTML = "";
      this._element.appendChild(block);
    }
    this._addEvents();
  }

  render() {}

  _addEvents() {
    const { events = {} } = this._props;
    const { capture } = this._props;
    Object.keys(events).forEach((eventName: string) =>
      this._element?.addEventListener(eventName, events[eventName], capture)
    );
  }

  _removeEvents() {
    const { events = {} } = this._props;
    Object.keys(events).forEach((eventName) => {
      this._element?.removeEventListener(eventName, events[eventName]);
    });
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: AllProps) {
    const proxyProps = new Proxy(props, {
      get(target, property) {
        const value = target[property as string];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set: (target, property, value) => {

        const oldValue = { ...target };
        // target[property as string] = value;
        // // return true;
        // console.log('oldValue',oldValue)
        target[property as string] = value;
        this._eventBus().emit(EVENTS.FLOW_CDU, oldValue, target);
        return true;
      },
    });

    return proxyProps;
  }

  _createDocumentElement(tagName: string, className: string): HTMLElement {
    const element = document.createElement(tagName);
    element.setAttribute("data-id", this._id);
    element.classList.add(className);
    return element;
  }

  compile(template: any, props?: Props) {
    if (typeof props === "undefined") {
      props = this._props;
    }

    const propsAndStubs: any = { ...props };

    if (this._element?.className === "chat-wrapper") {
      console.log("props-stubs-chat-wr", propsAndStubs);
    } else if (this._element?.className === "list-wrapper") {
      console.log("props-stubs-list-wr", propsAndStubs);
    }

    Object.entries(this._children).forEach(([key, child]: any) => {
      if (Array.isArray(child)) {
        console.log("🚀 ~ Block ~ child", child);
        propsAndStubs[key] = child.map(
          (ch) => `<div data-id="${ch.id}"></div>`
        );
      } else {
        propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
      }
    });

    const fragment = this._createDocumentElement(
      "template",
      "template"
    ) as HTMLTemplateElement;
    fragment.innerHTML = template(propsAndStubs);

    const replaceStub = (block: Block) => {
      const stub = fragment.content.querySelector(`[data-id="${block.id}"]`);
      if (!stub) {
        return;
      }
      block.getContent()?.append(...Array.from(stub.childNodes));

      stub.replaceWith(block.getContent()!);
    };

    Object.values(this._children).forEach((child: Block) => {
      if (Array.isArray(child)) {
        child.forEach(replaceStub);
      } else {
        replaceStub(child);
      }

      // const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);
      // stub && stub.replaceWith(child.getContent());
    });

    return fragment.content;
  }

  show() {
    const content = this.getContent();
    content!.style.display = "block";
  }

  hide() {
    const content = this.getContent();
    content!.style.display = "none";
  }
}

export { Block };
