import Block from "../../services/Block";
import template from './index.hbs'


type InputProps = {

}

class CustomInput extends Block {

  constructor(props: InputProps) {
    super('div', 'input-wrapper', props)
  }

  render() {
    console.log('Render Form')

    
    return this.compile(template);
  }
  
}

export default CustomInput