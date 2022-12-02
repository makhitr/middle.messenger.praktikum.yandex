import { Page } from "../../components/page";
import { Form } from "../../components/form";
import { CustomInput } from "../../components/input";
import { CustomInputs } from "../../components/inputs/inputs";
import { IndexLayout } from "../../layouts/indexLayout";
import {
  avatarEvents,
  profileFormEvent,
} from "../../utils/validateProfileForm";
import Store from "../../services/Store/Store";
import { User } from "../../types/userTypes";

class ProfilePage extends IndexLayout {
  constructor() {
    const store = new Store().getState();
    const userStore = store.user as User;
    console.log("🚀 ~ ProfilePage ~ userStore", userStore)

    
    const className = "info-field";
    const profileAvatar = new CustomInput(
      {
        className: "input-avatar",
        type: "file",
        value: "image",
        name: "avatar",
        events: avatarEvents,
      },
      "avatar"
    );

    const profileName = new CustomInput(
      {
        profileText: userStore.first_name,
        type: "text",
        value: userStore.first_name,
        text: "First Name",
        className: "edit-inputs",
        name: "first_name",
      },
      className
    );

    const profileSName = new CustomInput(
      {
        profileText: userStore.second_name,
        type: "text",
        value: userStore.second_name,
        text: "Second Name",
        className: "edit-inputs",
        name: "second_name",
      },
      className
    );
    const profileLogin = new CustomInput(
      {
        profileText: userStore.login,
        type: "text",
        value: userStore.login,
        text: "Login",
        className: "edit-inputs",
        name: "login",
      },
      className
    );
    const profileEmail = new CustomInput(
      {
        profileText: userStore.email,
        type: "email",
        value:  userStore.email,
        text: "E-mail",
        className: "edit-inputs",
        name: "email",
      },
      className
    );
    const profilePhone = new CustomInput(
      {
        profileText:  userStore.phone,
        type: "phone",
        value: userStore.phone,
        text: "Phone",
        className: "edit-inputs",
        name: "phone",
      },
      className
    );
    const profilePassword = new CustomInput(
      {
        profileText:userStore.password,
        type: "password",
        value: userStore.password,
        text: "Password",
        className: "edit-inputs",
        name: "password",
      },
      className
    );

    const submitBtn = new CustomInput(
      {
        profileText: "",
        type: "submit",
        value: "Edit",
        text: "",
        className: "input-submit",
        name: "submit",
      },
      "input-wrapper"
    );

    const inputs = new CustomInputs({
      profileAvatar: profileAvatar,
      inputName: profileName,
      inputSName: profileSName,
      inputLogin: profileLogin,
      inputEmail: profileEmail,
      inputPhone: profilePhone,
      // inputPassword: profilePassword,
      inputSubmit: submitBtn,
    });

    const form = new Form({
      title: "Profile Form",
      inputs: inputs,
      events: profileFormEvent,
      capture: true,
    });
    const content = new Page({ title: "My messenger", form: form });

    super({
      title: "Profile Page",
      content: content,
    });
  }
}

export { ProfilePage };
