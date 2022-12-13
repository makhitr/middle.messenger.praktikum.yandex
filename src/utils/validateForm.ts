import * as AuthActions from "../services/Store/actions/AuthActions";

export const objValidator: { [key: string]: RegExp } = {
  avatar: /^\s*$|(([a-zA-Z0-9\s_\\.\-():])+(.jpg|.JPG|.jpeg|.JPEG))$/,
  login: /^[a-zA-Z][a-zA-Z0-9-_.]{3,20}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,40}$/,
  email: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
  first_name: /^[A-ZА-Я][a-zA-Zа-яА-Я-]/,
  second_name: /^[A-ZА-Я][a-zA-Zа-яА-Я-]/,
  phone: /^(\+|\d)[\d]{10,15}$/,
  message: /[\w]{5}/,
};

const validateOnBlur = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const message = target.parentElement
    ?.nextElementSibling as HTMLElement | null;

  if (target.tagName.toLowerCase() !== "button") {
    let key = target.name;

    if (target.name.toLowerCase().includes("password")) {
      key = target.type;
    }

    if (!objValidator[key].test(target.value)) {
      target.style.background = "#ea7d7d";
      if (message) message.style.display = "block";
    }
  }
};

const validateOnSubmit = (form: HTMLFormElement) => {
  const object = {};
  const errors = [];
  for (let i = 0; i < form.length; i++) {
    const element = form[i] as HTMLInputElement;
    if (element.tagName.toLowerCase() === "input") {
      if (validateInput(element)) {
        object[element.name] = element.value;
      } else {
        errors.push(element.value);
      }
    }
  }

  if (errors.length === 0) {
    return object;
  }

  return false;
};

const validateInput = (input: HTMLInputElement) => {
  let key = input.name;
  const message = input.parentElement?.nextElementSibling as HTMLElement | null;

  if (input.name.toLowerCase().includes("password")) {
    key = input.type;
  }
  if (!objValidator[key].test(input.value)) {
    input.style.background = "#ea7d7d";
    if (message) message.style.display = "block";

    return false;
  } else {
    input.style.background = "#fff";
    return true;
  }
};

const validateOnFocus = (event: FocusEvent) => {
  const target = event.target as HTMLInputElement;
  const message = target.parentElement
    ?.nextElementSibling as HTMLElement | null;

  if (target.tagName.toLowerCase() !== "button") {
    target.style.background = "#fff";

    if (message) message.style.display = "none";
  }
};

const submitLoginForm = (event: Event) => {
  event.preventDefault();
  const validateData = validateOnSubmit(event.target as HTMLFormElement);
  if (validateData !== false) {
    AuthActions.loginUser(validateData);
    // router.go("/messenger");
  }
};

const submitRegisterForm = (event: Event) => {
  event.preventDefault();
  const validateData = validateOnSubmit(event.target as HTMLFormElement);
  if (validateData !== false) {
    AuthActions.registerUser(validateData);
    // router.go("/messenger");
  }
};

export {
  submitLoginForm,
  validateOnBlur,
  validateOnFocus,
  validateOnSubmit,
  submitRegisterForm,
};
