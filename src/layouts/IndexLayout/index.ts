import { AllProps, Block } from "../../services/Block";
import template from './index.hbs'

class IndexLayout extends Block {
  constructor(props: AllProps) {
    super('main', 'main-wrapper', props)
  }

  render() {
    return this.compile(template)
  }

}

export { IndexLayout };
