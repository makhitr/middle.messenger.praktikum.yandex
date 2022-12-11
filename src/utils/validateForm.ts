import * as AuthActions from "../services/Store/actions/AuthActions";
import { Router } from "../services/Router/Router";

export type User = {
  [key: string]: string;
};

export const objValidator: { [key: string]: RegExp } = {
  avatar: /\s|(([a-zA-Z0-9\s_\\.\-():])+(.jpg|.JPG))$/,
  login: /^[a-zA-Z][a-zA-Z0-9-_.]{3,20}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,40}$/,
  email: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
  first_name: /^[A-ZА-Я][a-zA-Zа-яА-Я-]/,
  second_name: /^[A-ZА-Я][a-zA-Zа-яА-Я-]/,
  phone: /^(\+|\d)[\d]{10,15}$/,
  message: /[\w]{5}/,
};

export const user: User = {};

const validateOnBlur = (event: Event) => {

  const target = event.target as HTMLInputElement;
  const message = target.parentElement
    ?.nextElementSibling as HTMLElement | null;

  if (target.tagName.toLowerCase() !== "button") {
    if (!objValidator[target.name].test(target.value)) {
      target.style.background = "#ea7d7d";
      if (message) message.style.display = "block";
    } else {
      user[target.name as keyof User] = target.value;
    }
    console.log(user);
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
  if (!objValidator[input.name].test(input.value)) {
    input.style.background = "#ea7d7d";
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

// const validateOnSubmit = (event: Event, inputsNumber: NodeList) => {
//   event.preventDefault();

//   if (inputsNumber.length - 1 === Object.keys(user).length) {
//     console.log("form is submitted");
//   } else {
//     inputsNumber.forEach((input: HTMLInputElement) => {
//       if (!(input.name in user)) {
//         const el = input.parentElement
//           ?.nextElementSibling as HTMLElement | null;
//         if (el) el.style.display = "block";
//       }
//     });
//   }
// };

// const validateForm = (event: Event) => {
//   const target: HTMLInputElement = event.target as HTMLInputElement;
//   const form = event.currentTarget as HTMLFormElement;
//   const inputsNumber: NodeList = form.querySelectorAll("input") as NodeList;

//   if (event.type === "submit") {
//     validateOnSubmit(event, inputsNumber);
//   } else {
//     const message: HTMLElement = target.parentElement
//       ?.nextElementSibling as HTMLElement;
//     if (event.type === "blur") {
//       validateOnBlur(target, message);
//     } else if (event.type === "focus") {
//       validateOnFocus(target, message);
//     }
//   }
// };

// const submitForm = (event: Event) => {
//   validateForm(event);
//   AuthActions.registerUser(user);
// };

const submitLoginForm = (event: Event) => {
  event.preventDefault();
  const validateData = validateOnSubmit(event.target as HTMLFormElement);
  if (validateData !== false) {
    AuthActions.loginUser(validateData);
    // router.go("/messenger");
  }
};

// export { validateForm, submitForm, submitLoginForm };
export { submitLoginForm , validateOnBlur, validateOnFocus, validateOnSubmit};
