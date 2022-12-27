import { Page } from "../../components/page";
import template from "./index.hbs";
import { Messages } from "../../components/messages";
import { AsideList } from "../../components/asideList";


class MessagePage extends Page {
  constructor() {
    super(
      {
        title: "Message Page",
        asideList: new AsideList({}),
        messages: new Messages({}),
      },
      "message-page-wrapper"
    );
  }

  componentDidUpdate(oldProps, newProps) {
    return true;
  }

  render(): DocumentFragment {
    return this.compile(template);
  }
}

export { MessagePage };
