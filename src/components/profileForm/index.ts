import { Connect } from "../../services/Store/Connect";
import { avatarEvents } from "../../utils/validateProfileForm";
import { Button } from "../button";
import { CustomInput } from "../input";
import { CustomInputs } from "../inputs/inputs";
import { ProfileForm } from "./profileForm";

export default Connect(ProfileForm, (state) => {
  const inputs = new CustomInputs({
    profileAvatar: new CustomInput(
      {
        className: "input-avatar",
        type: "file",
        value: "",
        name: "avatar",
        events: avatarEvents,
      },
      "avatar",
      state.avatar ?? "" 
    ),
    inputName: new CustomInput(
      {
        profileText: state.user?.first_name ?? "",
        type: "text",
        value: state.user?.first_name ?? "",
        text: "First Name",
        className: "edit-inputs",
        name: "first_name",
      },
      "info-field"
    ),
    inputSName: new CustomInput(
      {
        profileText: state.user?.second_name ?? "",
        type: "text",
        value: state.user?.second_name ?? "",
        text: "Second Name",
        className: "edit-inputs",
        name: "second_name",
      },
      "info-field"
    ),
    inputLogin: new CustomInput(
      {
        profileText: state.user?.login ?? "",
        type: "text",
        value: state.user?.login ?? "",
        text: "Login",
        className: "edit-inputs",
        name: "login",
      },
      "info-field"
    ),

    inputEmail: new CustomInput(
      {
        profileText: state.user?.email ?? "",
        type: "email",
        value: state.user?.email ?? "",
        text: "E-mail",
        className: "edit-inputs",
        name: "email",
      },
      "info-field"
    ),
    inputPhone: new CustomInput(
      {
        profileText: state.user?.phone ?? "",
        type: "phone",
        value: state.user?.phone ?? "",
        text: "Phone",
        className: "edit-inputs",
        name: "phone",
      },
      "info-field"
    ),
    // inputPassword: profilePassword,
  });

  return {
    inputs: inputs,
    editButton: new Button({
      text: "Edit",
    }),
    submitButton: new Button(
      {
        text: "Save",
      },
      "submit",
      "submit-btn"
    ),
  };
});
