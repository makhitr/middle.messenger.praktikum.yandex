import { validateOnBlur, validateOnFocus } from "./validateForm";

// import {name, profileName, profilePassword, profileSName } from '../../src/pages/profilePage'
type UserProfile = {
  "avatar": string,
  "first_name": string,
  "second_name": string,
  "login": string,
  "email": string,
  "phone": string,
  "password": string
};


const userProfile: UserProfile = {
  avatar: "",
  first_name: "",
  second_name: "",
  login: "",
  email: "",
  phone: "",
  password: ""
}

const changeAvatar = (event: Event) => {  
  const avatar = event.target as HTMLElement
  const avatarInput = avatar.querySelector('input') as HTMLInputElement | null
  // console.log('avatarInput', avatarInput)
  avatar.classList.add("change-avatar");
  if (avatarInput) avatarInput.style.display = "inline";
};


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
  const target = event.target as HTMLInputElement;
  if (event.type === "submit") {
    editInfo(event);
   } 
   else {
    const message: HTMLElement = target.parentElement
      ?.nextElementSibling as HTMLElement;
    if (event.type === "blur") {
      validateOnBlur(target, message);
    } else 
    if (event.type === "focus") {
      validateOnFocus(target, message);
    }
  }
};

const profileFormEvent = {
  focus: validateProfileForm,
  blur: validateProfileForm,
  submit: validateProfileForm,
};

const avatarEvents = {
  click: changeAvatar,
};


export {
  profileFormEvent,
  avatarEvents,
};
