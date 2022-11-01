import { v4 as makeUUID } from 'uuid';
import EventBus from './EventBus'

enum EVENTS {
  INIT = "init",
  FLOW_CDM = "flow:component-did-mount",
  FLOW_CDU = "flow:component-did-update",
  FLOW_RENDER = "flow:render",
}

interface IBlock {
  _element: null | HTMLDivElement | any;
  _meta: null | Meta;
  _id: null | string;
  _eventBus: Function;
  props: any
}

type Meta = {
  tagName: string,
  props: {}
}

type Props = {

}

class Block implements IBlock {

  _element: null | HTMLDivElement | any;
  _meta;
  _id;
  _eventBus;
  props: any;

  // /** JSDoc
  //  * @param {string} tagName
  //  * @param {Object} props
  //  *
  //  * @returns {void}
  //  */
  constructor(tagName: string = "div", props: Props = {}) {
    const eventBus: EventBus = new EventBus();
    // const { children, props } = this._getChildren(propsAndChildren);

    this._meta = {
      tagName,
      props,
    };

    this._id = makeUUID(); // Генерируем уникальный UUID V4

    this.props = this._makePropsProxy({ ...props, __id: this._id });

    this._eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(EVENTS.INIT);
  }

  // _getChildren(propsAndChildren) {
  //   const children = {};
  //   const props = {};
  //   Object.entries(propsAndChildren).forEach(([key, value]) => {
  //     if (value instanceof Block) {
  //       children[key] = value;
  //     } else {
  //       props[key] = value;
  //     }
  //   });
  //   return { children, props };
  // }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(EVENTS.INIT, this.init.bind(this));
    eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this.dispatchComponentDidMount();
    this._eventBus().emit(EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();
  }

  // componentDidMount(oldProps) { }
  componentDidMount() { }

  dispatchComponentDidMount() {
    this._eventBus().emit(EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: any, newProps: any) {
    this.componentDidUpdate(oldProps, newProps);
    // ...
  }

  componentDidUpdate(oldProps: any, newProps: any) {
    this._removeEvents();

    Object.assign(oldProps, newProps);
    this._eventBus().emit(EVENTS.FLOW_RENDER);
    return true;
  }

  setProps = (nextProps: any) => {
    if (!nextProps) {
      return;
    }
    if (
      JSON.stringify(Object.entries(this.props)) !==
      JSON.stringify(Object.entries(nextProps))
    ) {
      this._eventBus().emit(EVENTS.FLOW_CDU, this.props, nextProps);
    }
  };

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render();
    // Это небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно компилировать не в строку (или делать это правильно),
    // либо сразу превращать в DOM-элементы и возвращать из compile DOM-ноду
    this._element.innerHTML = block

    this._addEvents();
  }

  // Переопределяется пользователем. Необходимо вернуть разметку
  render() { }

  _addEvents() {
    const { events = {} } = this.props;
    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents() {
    const { events = {} } = this.props;
    Object.keys(events).forEach((eventName) => {
      this._element?.removeEventListener(eventName, events[eventName]);
    });
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: any) {
    const proxyProps = new Proxy(props, {
      get(target, property) {
        const value = target[property];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, property, value) {
        console.log("someone set props");
        target[property] = value;
        // this._eventBus().emit(EVENTS.FLOW_CDU, property, value);
        return true;
      },
    });

    return proxyProps;
  }

  _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    const element = document.createElement(tagName);
    element.setAttribute("data-id", this._id);
    return element;
  }

  show() {
    const content = this.getContent()
    content!.style.display = "block";
  }

  hide() {
    const content = this.getContent()
    content!.style.display = "none";
  }
}

export default Block;
