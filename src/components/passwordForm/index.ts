import { Connect } from "../../services/Store/Connect";
import { Button } from "../button";
import { CustomInput } from "../input";
import { PasswordForm } from "./passwordForm";

export default Connect(PasswordForm, () => {
  const oldPassword = new CustomInput(
    {
      type: "password",
      value: "",
      text: "Old password",
      name: "oldPassword",
      className: "input",
    },
    "info-field"
  );
  const newPassword = new CustomInput({
    type: "password",
    text: "New password",
    name: "newPassword",
    value: "",
    className: "input",
  },
  "info-field");

  return {
    oldPassword: oldPassword,
    newPassword: newPassword,
    button: new Button(
      {
        text: "Change Password",
      },
      "submit",
      "submit-btn"
    ),
  };
});
