import { Page } from "../../components/page";
import { Form } from "../../components/form";
import { CustomInput } from "../../components/input";
import { CustomInputs } from "../../components/inputs/inputs";
import { IndexLayout } from "../../layouts/IndexLayout";
import { avatarEvents, profileFormEvent } from "../../utils/validateProfileForm";

const className = "info-field";
const profileAvatar = new CustomInput(
  {
    className: "input-avatar",
    type: "file",
    value: "image",
    name: "avatar-img",
    events: avatarEvents,
  },
  "avatar"
);
const profileName = new CustomInput({
  profileText: "Peter",
  type: "text",
  value: "Peter",
  text: "First Name",
  className: "edit-inputs",
  name: "first_name",
}, className);

const profileSName = new CustomInput(
  {
    profileText: "Pan",
    type: "text",
    value: "Pan",
    text: "Second Name",
    className: "edit-inputs",
    name: "second_name",
  },
  className
);
const profileLogin = new CustomInput(
  {
    profileText: "PeterPan",
    type: "text",
    value: "PeterPan",
    text: "Login",
    className: "edit-inputs",
    name: "login"
  },
  className
);
const profileEmail = new CustomInput(
  {
    profileText: "peter@scottish.com",
    type: "email",
    value: "peter@scottish.com",
    text: "E-mail",
    className: "edit-inputs",
    name: "email",
  },
  className
);
const profilePhone = new CustomInput(
  {
    profileText: "+1902-1922-11",
    type: "phone",
    value: "+1902-1922-11",
    text: "Phone",
    className: "edit-inputs",
    name: "phone",
  },
  className
);
const profilePassword = new CustomInput(
  {
    profileText: "*********",
    type: "password",
    value: "1223456",
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
  inputPassword: profilePassword,
  inputSubmit: submitBtn,
});

const form = new Form({
  title: "Profile Form",
  inputs: inputs,
  events: profileFormEvent,
  capture: true,
});
const content = new Page({ title: "My Profile", form: form });

export const profilePage = new IndexLayout({
  title: "Profile Page",
  content: content,
});

export { profileEmail, profileName, profilePassword, profileSName };
