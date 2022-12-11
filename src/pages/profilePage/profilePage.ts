import { Page } from "../../components/page";
import ProfileForm from "../../components/profileForm";
import template from "./index.hbs";
import { profileFormEvent } from "../../utils/validateProfileForm";

class ProfilePage extends Page {
  constructor() {
    super({
      title: "My messenger",
      form: new ProfileForm({ events: profileFormEvent, capture: true }),
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

export { ProfilePage };
