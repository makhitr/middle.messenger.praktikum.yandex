import Block from "../../services/Block";
import template from './index.hbs'

class Index extends Block {

  constructor(props: any) {
    super('main', 'main-wrapper', props)
  }

  render() {
    return this.compile(template)
  }

}

export default Index;