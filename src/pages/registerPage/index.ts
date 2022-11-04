import Page from "../../components/page/Page";
import Form from "../../components/form/Form";
import CustomInput from "../../components/input/Input";
import CustomInputs from "../../inputs/inputs";
import IndexLayout from "../../layouts/IndexLayout";

const inputName = new CustomInput({
  type: "text",
  required: true,
  value: "",
  text: "First Name",
});
const inputSName = new CustomInput({
  type: "text",
  text: "Second Name",
  required: true,
  value: "",
});
const inputLogin = new CustomInput({
  type: "text",
  text: "Login",
  required: true,
  value: "",
});
const inputEmail = new CustomInput({
  type: "email",
  text: "Email",
  required: true,
  value: "",
});
const inputPassword = new CustomInput({
  type: "password",
  text: "Password",
  required: true,
  value: "",
});
const inputPhone = new CustomInput({
  type: "phone",
  text: "Phone",
  required: true,
  value: ""
});
const inputSubmit = new CustomInput({
  type: "submit",
  text: "",
  required: true,
  value: "Register",
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
