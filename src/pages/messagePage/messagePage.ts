import template from "./index.hbs";
import * as ChatActions from "../../services/Store/actions/ChatActions";
import { Page } from "../../components/page";

class MessagePage extends Page {
  constructor(props = {}) {
    super(props, "main-wrapper");

    ChatActions.getAllChats();
  }

  render(): DocumentFragment {
    return this.compile(template);
  }
}

export { MessagePage };
