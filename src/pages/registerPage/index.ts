import { Page } from "../../components/page";
import { Form } from "../../components/form";
import { CustomInput } from "../../components/input";
import { CustomInputs } from "../../components/inputs/inputs";
import { IndexLayout } from "../../layouts/indexLayout";
import { formEvents } from "../../utils/validateForm";

class RegisterPage extends IndexLayout {
  constructor() {
    const inputName = new CustomInput({
      className: "input",
      name: "first_name",
      type: "text",
      required: true,
      value: "",
      text: "First Name",
    });
    const inputSName = new CustomInput({
      className: "input",
      name: "second_name",
      type: "text",
      text: "Second Name",
      required: true,
      value: "",
    });
    const inputLogin = new CustomInput({
      className: "input",
      name: "login",
      type: "text",
      text: "Login",
      required: true,
      value: "",
    });
    const inputEmail = new CustomInput({
      className: "input",
      name: "email",
      type: "email",
      text: "Email",
      required: true,
      value: "",
    });
    const inputPassword = new CustomInput({
      className: "input",
      name: "password",
      type: "password",
      text: "Password",
      required: true,
      value: "",
    });
    const inputPhone = new CustomInput({
      className: "input",
      name: "phone",
      type: "phone",
      text: "Phone",
      required: true,
      value: "",
    });
    const inputSubmit = new CustomInput({
      className: "input",
      name: "submit",
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
      inputSubmit: inputSubmit,
    });

    const form = new Form({
      title: "Register Form",
      inputs: inputs,
      events: formEvents,
      capture: true,
    });

    const content = new Page({ title: "My messenger", form: form });

    super({
      title: "Register Page",
      content: content,
    });
  }
}

export { RegisterPage };
