import Block from "../../services/Block";
import template from './index.hbs'

class CustomInputs extends Block  {
  
  constructor(props: {} | undefined) {
    super('div', 'inputs-wrapper', props)
  }

  render() {
    return this.compile(template);

  }
} 

export default CustomInputs;