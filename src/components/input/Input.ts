import Block from "../../services/Block";


type InputProps = {

}

class Input extends Block {

  constructor(props: InputProps) {
    super('input', 'input', props)
  }

  render() {
    console.log('Render Form')

    
    // return this.compile(template);
  }
  
}

export default Input