import Block from "../../services/Block";
import template from './index.hbs'

class Index extends Block {

  constructor(props: any) {
    super('main', props)
  }

  render() {
    console.log('Layout render', this._props)
    // console.log(this.compile(tmpl, this.props))
    // return this.compile(tmpl)
    return this.compile(template)
    // return template(this._props)
  }

}

export default Index;