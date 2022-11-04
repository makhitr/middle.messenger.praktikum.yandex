// import Form from "../../components/form/Form";
// import IndexLayout from "../../layouts/IndexLayout";
// import Page from "../IndexPage";

export const pageRegisterInfo = {
  link: "register",
  pageName: "Register Page",
  title: "My Messenger",
  formInputs: [
    {
      type: "text",
      text: "First Form Name",
      required: true,
      value: "",
    },
    {
      type: "text",
      text: "Second Name",
      required: true,
      value: "",
    },
    {
      type: "text",
      text: "Login",
      required: true,
      value: "",
    },
    {
      type: "email",
      text: "Email",
      required: true,
      value: "",
    },
    {
      type: "password",
      text: "Password",
      required: true,
      value: "",
    },
    {
      type: "phone",
      text: "Phone",
      required: true,
      value: "",
    },
    {
      type: "submit",
      text: "",
      required: true,
      value: "Register",
    },
  ],
};



// // const inputs = new CustomInputs({ inputLogin: inputLogin, passwordLogin: inputPassword, inputSubmit: inputSubmit, inputLoginTEST: inputLogin })
// const form = new Form({ title: "Register Form", inputs: inputs })
// const content = new Page({ title: pageRegisterInfo.title, form: form })

// export const RegisterPage = new IndexLayout({
//   title: pageRegisterInfo.pageName,
//   content: content
// })
