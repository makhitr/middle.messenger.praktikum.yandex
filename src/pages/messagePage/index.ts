import * as AuthActions from "../../services/Store/actions/AuthActions";
import { Button } from "../../components/button";
import { Form } from "../../components/form";
import { CustomInput } from "../../components/input";
import { CustomInputs } from "../../components/inputs/inputs";
import { MessageForm } from "../../components/messageForm";
import { MessagePreview } from "../../components/messagePreview";
import { Messages } from "../../components/messages";
import { MessageView } from "../../components/messageView";
import { Page } from "../../components/page";
import { MessageLayout } from "../../layouts/messageLayout";

const messageAlex = new MessagePreview({
  name: "Alex",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  newMessages: 4,
});
const messageDan = new MessagePreview({
  name: "Dan",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  newMessages: 1,
});
const messages = new Messages({
  messageAlex: messageAlex,
  messageDan: messageDan,
});

const incomingMessage = new MessageView({
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
});
const userMessage = new MessageView(
  { text: "Lorem Ipsum is simply dummy text" },
  "message-view-wrapper-user"
);

const logout = () => {
  //  UserActions.getUser()
  AuthActions.logoutUser();
};

const handleClick = {
  click: logout,
};

class MessagePage extends MessageLayout {
  constructor() {
    const input = new CustomInput({
      type: "text",
      required: false,
      value: "",
      text: "Find",
      name: "find",
      className: "find-input",
    });
    const inputSubmit = new CustomInput({
      type: "submit",
      required: false,
      name: "submit",
      value: "find",
      text: "find",
      className: "find-input-btn",
    });

    const inputs = new CustomInputs({ input: input, inputSubmit: inputSubmit });
    const messageForm = new MessageForm({});
    const findForm = new Form({ inputs: inputs });
    const signOutBtn = new Button({ text: "logout", events: handleClick });

    const content = new Page(
      {
        title: "Messenger text",
        incoming: incomingMessage,
        outcoming: userMessage,
        messageForm: messageForm,
      },
      "message-wrapper"
    );

    const asideContent = new Page(
      {
        title: "Aside",
        form: findForm,
        messages: messages,
        signOutBtn: signOutBtn,
      },
      "aside-wrapper"
    );

    super({
      title: "Message Page",
      asideContent: asideContent,
      content: content,
    });
  }
}

export { MessagePage };
