import { Page } from "../../components/page";
import template from "./index.hbs";
import  Messages  from "../../components/messages";
import { AsideList } from "../../components/asideList";
import * as ChatActions from "../../services/Store/actions/ChatActions";

class MessagePage extends Page {
  constructor() {
    super(
      {
        asideList: new AsideList({}),
        messages: new Messages({}),
      },
      "message-page-wrapper"
    );
  
   ChatActions.getAllChats()
  }

  render(): DocumentFragment {
    return this.compile(template);
  }
}

export { MessagePage };
