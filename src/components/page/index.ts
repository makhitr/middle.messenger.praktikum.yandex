import Block from "../../services/Block";
import template from './index.hbs'


class Page extends Block {
  constructor(props: any, className = "section-wrapper") {
    super('section', className, props)
  }

  render() {
    console.log("Page is rendered")

    return this.compile(template)
  }
}

export default Page