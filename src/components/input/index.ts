import { Block } from "../../services/Block";
import template from './index.hbs'


type InputProps = {

}

class CustomInput extends Block {

  constructor(props: InputProps, className = "input-wrapper") {
    super('div', className, props)

  }

  _addEvents() {
    const { events = {} } = this._props;
    Object.keys(events).forEach((eventName) => {
      this._element?.childNodes[1].addEventListener(eventName, events[eventName]);
    });
  }


  _removeEvents() {
    const { events = {} } = this._props;
    Object.keys(events).forEach((eventName) => {
      this._element?.childNodes[1].addEventListener(eventName, events[eventName]);
    });
  }

  render() {
    return this.compile(template);
  }

}

export { CustomInput }