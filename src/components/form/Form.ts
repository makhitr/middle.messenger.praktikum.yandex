import Handlebars = require("handlebars");
import Block from "../../services/Block";

type FormProps = {
[key: string]: any
}


class Form extends Block {
  constructor(props: FormProps) {
    super('form', props)
  }

  render() {
    const { text, events } = this.props;
    console.log(text)

    const template = Handlebars.compile("{{text}}");
    
    return template({ text });
  }
  
}

export default Form