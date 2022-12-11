import { validateOnBlur, validateOnFocus, validateOnSubmit } from "./validateForm";
import * as UserActions from "../services/Store/actions/UserActions";

const changeAvatar = (event: Event) => {
  const avatar = event.target as HTMLElement;
  const avatarInput = avatar.querySelector("input") as HTMLInputElement | null;
  avatar.classList.add("change-avatar");
  if (avatarInput) avatarInput.style.display = "inline";
};

const showElement = (el: HTMLElement) => {
  el.style.display = "flex";
};
const hideElement = (el: HTMLElement) => {
  el.style.display = "none";
};

function editFormElements(form: HTMLFormElement) {
  const inputs = form.querySelectorAll(".edit-inputs");
  const profileInfo = form.querySelectorAll(".edit-labels");
  inputs.forEach(showElement);
  profileInfo.forEach(hideElement);
}

const submitHandler = (event: Event) => {
  event.preventDefault();
  const submitBtn = document.querySelector(".submit-btn") as HTMLElement;
  const editBtn = submitBtn.previousElementSibling as HTMLElement;

  const validateData = validateOnSubmit(event.target as HTMLFormElement);
  if (validateData !== false) {
    UserActions.updateProfile(validateData);
    hideElement(submitBtn);
    showElement(editBtn);
  }
};

const clickHandler = (event: Event) => {
  const element = event.target as HTMLButtonElement;
  const submitBtn = document.querySelector(".submit-btn") as HTMLButtonElement;
  const form = document.querySelector("form") as HTMLFormElement;

  if (element.type?.toLowerCase() === "button") {
    hideElement(element);
    showElement(submitBtn);
    editFormElements(form);
  }
};

const profileFormEvent = {
  focus: validateOnFocus,
  blur: validateOnBlur,
  submit: submitHandler,
  click: clickHandler,
};

const avatarEvents = {
  click: changeAvatar
};

export { profileFormEvent, avatarEvents };
