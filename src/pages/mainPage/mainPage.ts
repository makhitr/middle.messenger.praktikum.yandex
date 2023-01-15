import { Button } from "../../components/button";
import LoginForm from "../../components/LoginForm";
import { Page } from "../../components/page";
import * as AuthActions from "../../services/Store/actions/AuthActions";
import {
  submitLoginForm,
  validateOnBlur,
  validateOnFocus,
} from "../../utils/validateForm";
import template from "./index.hbs";

class MainPage extends Page {
  constructor() {
    super({
      form: new LoginForm({
        events: {
          blur: validateOnBlur,
          focus: validateOnFocus,
          submit: submitLoginForm,
        },
        capture: true,
      }),
      logoutBtn: new Button({
        text: "logout",
        events: {
          click: () => AuthActions.logoutUser(),
        },
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

  render(): DocumentFragment {
    return this.compile(template);
  }
}

export { MainPage };
