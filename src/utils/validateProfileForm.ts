import { validateOnBlur, validateOnFocus } from "./validateForm";

// import {name, profileName, profilePassword, profileSName } from '../../src/pages/profilePage'
type UserProfile = {
  "first-name": string,
  "second-name": string,
  "login": string,
  "email": string,
  "phone": string,
  "password": string
};


const userProfile: UserProfile = { }

// const changeAvatar = (avatar: HTMLElement, input: HTMLInputElement) => {
// const changeAvatar = (event) => {
//   event.target.classList.add("change-avatar");
//   event.target.firstElementChild.style.display = "inline";
// };


const changeBtnText = (submitBtn: HTMLInputElement) => {
  if (submitBtn.value === "Edit") {
    submitBtn.value = "Save";
  } else {
    submitBtn.value = "Edit";
  }
};

const editInputs = (
  inputs: Array<HTMLInputElement>,
  labels: Array<HTMLInputElement>
) => {

  for (const input of inputs) {
    userProfile[input.name] = input.value
    input.style.display = input.style.display === "flex" ? "none" : "flex";
  }
  for (const label of labels) {
    label.style.display = label.style.display != "none" ? "none" : "initial";
  }
  console.log(userProfile)
};

const editModeToggle = (
  e: InputEvent,
  inputs: Array<HTMLInputElement>,
  labels: Array<HTMLInputElement>,
  submitBtn: HTMLInputElement
) => {
  editInputs(inputs, labels);
  changeBtnText(submitBtn);
};

const editInfo = (event: Event): void => {
  const form = event.currentTarget as HTMLFormElement;
  const inputs = form.querySelectorAll(".edit-inputs");
  const labels = form.querySelectorAll(".edit-labels");
  const submitBtn = form.querySelector(".input-submit");
  editModeToggle(event, inputs, labels, submitBtn);
};

const validateProfileForm = (event: Event) => {
  event.preventDefault();

  // const form = event.currentTarget as HTMLFormElement;
  const target = event.target as HTMLInputElement;
  if (event.type === "submit") {
    editInfo(event);
   } 
   else {
    const message: HTMLElement = target.parentElement
      ?.nextElementSibling as HTMLElement;
      console.log(message)
    if (event.type === "blur") {
      validateOnBlur(target, message);
    } else 
    if (event.type === "focus") {
      validateOnFocus(target, message);
    }
  }

  // if (target.class !== "button") {
  //   console.log(target.class);
  //   user[target.name as keyof User] = target.value;
  // }
  // console.log(user);
};

const profileFormEvent = {
  focus: validateProfileForm,
  blur: validateProfileForm,
  submit: validateProfileForm,
};

const avatarEvents = {
  // click: changeAvatar,
};


export {
  profileFormEvent,
  avatarEvents,
};
