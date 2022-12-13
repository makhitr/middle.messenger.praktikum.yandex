import { Page } from "../../components/page";
import RegisterForm from "../../components/registerForm";
import { submitRegisterForm, validateOnBlur, validateOnFocus } from "../../utils/validateForm";
import template from "./index.hbs";

class RegisterPage extends Page {
  constructor() {
    super({
      title: "My Messenger",
      form: new RegisterForm({
        events: {
          blur: validateOnBlur,
          focus: validateOnFocus,
          submit: submitRegisterForm,
        },
        capture: true,
      }),
    });
  }

  componentDidUpdate(oldProps, newProps) {
    // console.log("🚀 ~ ProfilePage ~ newProps", newProps);
    // console.log("🚀 ~ ProfilePage ~ oldProps", oldProps);
    // return !(oldProps['text'] == newProps['text']);

    return true;
  }

  render(): DocumentFragment {
    return this.compile(template);
  }
}

export { RegisterPage };
