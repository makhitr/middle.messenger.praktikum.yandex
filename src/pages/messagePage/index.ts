import Form from "../../components/form/Form";
import CustomInput from "../../components/input/Input";
import CustomInputs from "../../components/inputs/inputs";
import Page from "../../components/page/Page";
import MessageLayout from "../../layouts/MessageLayout";
const input = new CustomInput({
  type: "text", required: false, value: "", text: "Find", name: "find", className: "find-input",

})
const inputSubmit = new CustomInput({
  type: "submit", required: false, name: "submit", value: "find",
  text: "find", className: "find-input-btn"})

const inputs = new CustomInputs({ input: input, inputSubmit: inputSubmit})

const findForm = new Form({inputs: inputs})

const content = new Page( { title: "Messenger text" }, 'message-wrapper');
const asideContent = new Page({title: "Aside", form: findForm}, 'aside-wrapper')

export const messagePage = new MessageLayout({
  title: "Message Page",
  asideContent: asideContent, 
  content: content,
});
