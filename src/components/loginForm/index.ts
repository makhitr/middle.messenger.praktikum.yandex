import { Connect } from "../../services/Store/Connect";
import { Button } from "../button";
import { CustomInput } from "../input";
import { CustomInputs } from "../inputs/inputs";
import { LoginForm } from "./loginForm";

export default Connect(LoginForm, () => {
  const inputs = new CustomInputs({
    inputLogin: new CustomInput({
      type: "text",
      value: "",
      text: "Login",
      name: "login",
      className: "input",
    }),
    inputPassword: new CustomInput({
      type: "password",
      text: "Password",
      name: "password",
      value: "",
      className: "input",
    }),
  });

  return {
    inputs: inputs,
    loginButton: new Button(
      {
        text: "Login",
      },
      "submit",
      "submit-btn"
    ),
  };
});
