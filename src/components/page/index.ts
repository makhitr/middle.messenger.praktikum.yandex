import {  Block } from "../../services/Block";
import template from './index.hbs'

type PageProps = {
  [key: string]: string | Block 
}

class Page extends Block {
  constructor(props: PageProps, className = "section-wrapper") {
    super('section', className, props)
  }

  render() {
       return this.compile(template)
  }
}

export {Page}
