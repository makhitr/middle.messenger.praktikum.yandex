import Block from "../../services/Block";
import template from './index.hbs'

class Page extends Block {
  constructor(props: any) {
    super('div', props)
  }

  render() {
    console.log("Page is rendered")

    return this.compile(template)
  }
}

export default Page