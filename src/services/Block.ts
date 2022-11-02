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
  _props: any;
  _children: any;
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
  _props: any;
  _children: any;

  // /** JSDoc
  //  * @param {string} tagName
  //  * @param {Object} props
  //  *
  //  * @returns {void}
  //  */
  constructor(tagName: string = "div", className: string, propsAndChildren: Props = {}) {
    const eventBus: EventBus = new EventBus();
    const { children, props } = this._getChildren(propsAndChildren);

    this._children = children;
    this._props = this._makePropsProxy({ ...props, __id: this._id });

    this._meta = {
      tagName,
      className,
      props,
    };

    this._id = makeUUID(); // Генерируем уникальный UUID V4

    // this._props = this._makePropsProxy({ ...propsAndChildren, __id: this._id });

    this._eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(EVENTS.INIT);
  }

  _getChildren(propsAndChildren: Props): any {
    const children: any = {};
    const props: any = {};
    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });
    // console.log("🚀 children", children)

    // console.log("🚀 props", props)
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
    console.log('className', className)
    this._element = this._createDocumentElement(tagName, className);
    console.log('thisEl', this._element)
  }

  init() {
    this._createResources();
    this.dispatchComponentDidMount();
    this._eventBus().emit(EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();
    Object.values(this._children).forEach((child: any) => {
      child.dispatchComponentDidMount();
    });
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
      JSON.stringify(Object.entries(this._props)) !==
      JSON.stringify(Object.entries(nextProps))
    ) {
      this._eventBus().emit(EVENTS.FLOW_CDU, this._props, nextProps);
    }
  };

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render();
    console.log('block', block)
    this._removeEvents() //????????????

    // Это небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно компилировать не в строку (или делать это правильно),
    // либо сразу превращать в DOM-элементы и возвращать из compile DOM-ноду
    this._element.innerHTML = '';
    this._element.appendChild(block);

    this._addEvents();
  }

  // Переопределяется пользователем. Необходимо вернуть разметку
  render() { }

  _addEvents() {
    const { events = {} } = this._props;
    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
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

  _createDocumentElement(tagName: string, className: string): HTMLElement {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    const element = document.createElement(tagName);
    element.setAttribute("data-id", this._id);
    element.classList.add(className)
    return element;
  }

  compile(template: any, props?: Props): any { //!!!!!!!дописать, не полная из урока

    if (typeof props === "undefined") {
      props = this._props
    }

    const propsAndStubs: any = { ...props };

    Object.entries(this._children).forEach(([key, child]: any) => {
      propsAndStubs[key] = `<div data-id="${child.id}"></div>`
    });

    const fragment = this._createDocumentElement('template', 'template') as HTMLTemplateElement
    fragment.innerHTML = template(propsAndStubs)
    console.log("fr", fragment)

    Object.values(this._children).forEach((child: any) => {
      const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);
    
      stub && stub.replaceWith(child.getContent()); 
      
    });

    return fragment.content
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
