import { Page } from "../../components/page";
import { Form } from "../../components/form";
import { CustomInput } from "../../components/input";
import { CustomInputs } from "../../components/inputs/inputs";
import { IndexLayout } from "../../layouts/IndexLayout";
import { formEvents } from "../../utils/validateForm";
import { Button } from "../../components/button";

const inputLogin = new CustomInput({
  type: "text",
  required: true,
  value: "",
  text: "Login",
  name: "login",
  className: "input",
});
const inputPassword = new CustomInput({
  type: "password",
  text: "Password",
  name: "password",
  required: true,
  value: "",
  className: "input",
});

const inputSubmit = new CustomInput({
  type: "submit",
  required: true,
  name: "submit",
  value: "SignIn",
  text: "",
  className: "input",
});

const inputs = new CustomInputs({
  inputLogin: inputLogin,
  // passwordLogin: inputPassword,
  // inputSubmit: inputSubmit,
  // inputLoginTEST: inputLogin,
});


const form = new Form({
  title: "Login Form",
  inputs: inputs,
 
  events: formEvents,
  capture: false,
});
const content = new Page({ title: "My messenger", form: form });

export const mainPage = new IndexLayout({
  title: "Login Page",
  content: content,
});
