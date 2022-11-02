import Block from "../../services/Block";
import template from './index.hbs'

type FormProps = {
[key: string]: any
}


class Form extends Block {

  constructor(props: FormProps) {
    super('form', 'page-form', props)
  }

  render() {
  

    
    return this.compile(template);
  }
  
}

export default Form