import Page from '../../components/page/Page'
import Form from "../../components/form/Form";
import CustomInput from "../../components/input/Input";
import CustomInputs from "../../components/inputs/inputs";
import IndexLayout from "../../layouts/IndexLayout";

const inputLogin = new CustomInput({ type: "text", required: true, value: "", text: "Login" })
const inputPassword = new CustomInput({type: "password", text: "Password", required: true, value: ""})
const inputSubmit = new CustomInput({ type: "submit", required: true, value: "Sign in", text: ""}, )

const inputs = new CustomInputs({ inputLogin: inputLogin, passwordLogin: inputPassword, inputSubmit: inputSubmit, inputLoginTEST: inputLogin })

const form = new Form({ title: "Login Form", inputs: inputs })
const content = new Page({ title: "My messenger", form: form })

export const mainPage = new IndexLayout({
  title: "Login Page",
  content: content
})
