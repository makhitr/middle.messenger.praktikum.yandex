import { Block } from "../../services/Block";
import template from './index.hbs'

type FormProps = {
[key: string]: any
}


class Form extends Block {

  constructor(props: FormProps, className='page-form') {
    super('form', className, props)
  }

  render() {
        return this.compile(template);
  }
  
}

export {Form}