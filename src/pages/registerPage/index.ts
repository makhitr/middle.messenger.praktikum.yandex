import Page from "../../components/page";
import Form from "../../components/form";
import CustomInput from "../../components/input";
import CustomInputs from "../../components/inputs/inputs";
import IndexLayout from "../../layouts/IndexLayout";
import { events } from "../../utils/validateForm";

const inputName = new CustomInput(
  {
    className: "input",
    name: "first_name",
    type: "text",
    required: true,
    value: "",
    text: "First Name",
    events: events
  });
const inputSName = new CustomInput({
  className: "input",
  name: "second_name",
  type: "text",
  text: "Second Name",
  required: true,
  value: "",
  events: events
});
const inputLogin = new CustomInput({
  className: "input",
  name: "login",
  type: "text",
  text: "Login",
  required: true,
  value: "",
  events: events

});
const inputEmail = new CustomInput({
  className: "input",
  name: "email",
  type: "email",
  text: "Email",
  required: true,
  value: "",
  events: events

});
const inputPassword = new CustomInput({
  className: "input",
  name: "password",
  type: "password",
  text: "Password",
  required: true,
  value: "",
  events: events

});
const inputPhone = new CustomInput({
  className: "input",
  name: "phone",
  type: "phone",
  text: "Phone",
  required: true,
  value: "",
  events: events

});
const inputSubmit = new CustomInput({
  className: "input",
  name: "submit",
  type: "submit",
  text: "",
  required: true,
  value: "Register",
  events: events
});

const inputs = new CustomInputs({
  inputName: inputName,
  inputSName: inputSName,
  inputLogin: inputLogin,
  inputEmail: inputEmail,
  inputPassword: inputPassword,
  inputPhone: inputPhone,
  inputSubmit: inputSubmit
});


const form = new Form({ title: "Register Form", inputs: inputs });
const content = new Page({ title: "My messenger", form: form });

export const registerPage = new IndexLayout({
  title: "Register Page",
  content: content,
});
