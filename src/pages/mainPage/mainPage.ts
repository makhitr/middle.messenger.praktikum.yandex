import LoginForm from "../../components/LoginForm";
import { Page } from "../../components/page";
import { submitLoginForm, validateOnBlur, validateOnFocus } from "../../utils/validateForm";
import template from "./index.hbs";

class MainPage extends Page {
  constructor() {
    super({
      title: "Login Page",
      form: new LoginForm({
        events: {
          blur: validateOnBlur,
          focus: validateOnFocus,
          submit: submitLoginForm,
        },
        capture: true,
      }),
    });

    // const logout = () => {
    //   AuthActions.logoutUser();
    // };

    // const handleClick = {
    //   click: logout,
    // };

    // const signOutBtn = new Button({ text: "logout", events: handleClick });

    // const signinEvent = (event: Event) => {
    //   validateForm(event);
    //   submitLoginForm()
    // };
  }

  componentDidUpdate(oldProps, newProps) {
    // console.log("🚀 ~ ProfilePage ~ newProps", newProps);
    // console.log("🚀 ~ ProfilePage ~ oldProps", oldProps);
    // return !(oldProps['text'] == newProps['text']);

    return false;
  }

  render(): DocumentFragment {
    return this.compile(template);
  }
}

export { MainPage };
