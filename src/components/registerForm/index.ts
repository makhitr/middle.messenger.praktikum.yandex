import { Connect } from "../../services/Store/Connect";
import { Button } from "../button";
import { CustomInput } from "../input";
import { CustomInputs } from "../inputs/inputs";
import { RegisterForm } from "./registerForm";

export default Connect(RegisterForm, () => {
  const inputs = new CustomInputs({
    inputName: new CustomInput(
      {
        className: "input",
        name: "first_name",
        type: "text",
        required: true,
        value: "",
        text: "First Name",
      },
      "info-field"
    ),
    inputSName: new CustomInput(
      {
        className: "input",
        name: "second_name",
        type: "text",
        text: "Second Name",
        required: true,
        value: "",
      },
      "info-field"
    ),
    inputLogin: new CustomInput(
      {
        className: "input",
        name: "login",
        type: "text",
        text: "Login",
        required: true,
        value: "",
      },
      "info-field"
    ),

    inputEmail: new CustomInput(
      {
        className: "input",
        name: "email",
        type: "email",
        text: "Email",
        required: true,
        value: "",
      },
      "info-field"
    ),
    inputPhone: new CustomInput(
      {
        className: "input",
        name: "phone",
        type: "phone",
        text: "Phone",
        required: true,
        value: "",
      },
      "info-field"
    ),
    inputPassword: new CustomInput(
      {
        className: "input",
        name: "password",
        type: "password",
        text: "Password",
        required: true,
        value: "",
      },
      "info-field"
    ),
  });

  return {
    inputs: inputs,
    submitButton: new Button(
      {
        text: "Register",
      },
      "submit",
      "submit-btn"
    ),
  };
});
