import Page from "../../components/page/Page";
import Form from "../../components/form/Form";
import CustomInput from "../../components/input/Input";
import CustomInputs from "../../components/inputs/inputs";
import IndexLayout from "../../layouts/IndexLayout";
import Button from "../../components/button/Button";

const className = "info-field"

const profileAvatar = new CustomInput({
  className: "input-avatar"
}, "avatar")
const profileName = new CustomInput({
  profileText: "Peter",
  type: "text",
  required: true,
  value: "Peter",
  text: "First Name",
  className: "edit-inputs"
},
  className);

const profileSName = new CustomInput({
  profileText: "Pan",
  type: "text",
  required: true,
  value: "Pan",
  text: "Second Name",
  className: "edit-inputs"
},
  className);
const profileLogin = new CustomInput({
  profileText: "PeterPan",
  type: "text",
  required: true,
  value: "PeterPan",
  text: "Login",
  className: "edit-inputs"
},
  className);
const profileEmail = new CustomInput({
  profileText: "peter@scottish.com",
  type: "email",
  required: true,
  value: "peter@scottish.com",
  text: "E-mail",
  className: "edit-inputs"
},
  className);
const profilePhone = new CustomInput({
  profileText: "+1902-1922-11",
  type: "phone",
  required: true,
  value: "+1902-1922-11",
  text: "Phone",
  className: "edit-inputs"
},
  className);
const profilePassword = new CustomInput({
  profileText: "*********",
  type: "password",
  required: true,
  value: "",
  text: "Password",
  className: "edit-inputs"
},
  className);



const inputs = new CustomInputs({
  profileAvatar: profileAvatar,
  inputName: profileName, inputSName: profileSName,
  inputLogin: profileLogin,
  inputEmail: profileEmail,
  inputPhone: profilePhone,
  inputPassword: profilePassword
})

const button = new Button({
  text: "Edit Profile", events: {
    click: event => {
    console.log(event)
    },
  }
})

console.log(button)

const form = new Form({ title: "Profile Form", inputs: inputs, button: button });
const content = new Page({ title: "My Profile", form: form });

export const profilePage = new IndexLayout({
  title: "Profile Page",
  content: content,
});
