import { Page } from "../../components/page";
import ProfileForm from "../../components/profileForm";
import template from "./index.hbs";
import { passwordEvent, profileFormEvent } from "../../utils/validateProfileForm";
import PasswordForm  from "../../components/passwordForm";

class ProfilePage extends Page {
  constructor() {
    super({
      title: "My messenger",
      form: new ProfileForm({ events: profileFormEvent, capture: true }),
      passwordForm: new PasswordForm({ events: passwordEvent, capture: true }),
    });
  }


  render(): DocumentFragment {
    return this.compile(template);
  }
}

export { ProfilePage };
