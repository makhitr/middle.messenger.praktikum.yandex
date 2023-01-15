import { Page } from "../../components/page";
import template from "./index.hbs";
import * as ChatActions from "../../services/Store/actions/ChatActions";

class MessagePage extends Page {
  constructor(props) {
    super(props,
      "message-page-wrapper"
    );
  
   ChatActions.getAllChats()
  }

  render(): DocumentFragment {
    return this.compile(template);
  }
}

export { MessagePage };
