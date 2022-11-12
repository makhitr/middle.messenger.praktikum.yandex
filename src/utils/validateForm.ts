type User = {
  [key: string]: string;
};

const objValidator: { [key: string]: RegExp } = {
  login: /^[a-zA-Z][a-zA-Z0-9-_.]{3,20}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,40}$/,
  email: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
  first_name: /^[A-ZА-Я][a-zA-Zа-яА-Я-]/,
  second_name: /^[A-ZА-Я][a-zA-Zа-яА-Я-]/,
  phone: /^(\+|\d)[\d]{10,15}$/,
  message: /[\w]{5}/,
};

const user: User = {};

const validateOnBlur = (target: HTMLInputElement, message: HTMLElement) => {
  if (!objValidator[target.name].test(target.value)) {
    target.style.background = "#ea7d7d";
    message.style.display = "block";
  } else {
    user[target.name as keyof User] = target.value;
  }
};

const validateOnFocus = (target: HTMLInputElement, message: HTMLElement) => {
  target.style.background = "none";
  message.style.display = "none";
};

const validateOnSubmit = (event: Event, inputsNumber: NodeList) => {
  event.preventDefault();
  if (inputsNumber.length - 1 === Object.keys(user).length) {
    console.log("form is submitted");
  } else {
    inputsNumber.forEach((input: HTMLInputElement) => {
      if (!(input.name in user)) {
        const el = input.parentElement?.nextElementSibling as HTMLElement | null;
       if (el) el.style.display = "block";
      }
    });
    console.log(user);
  }
};

const validateForm = (event: Event) => {
  const target: HTMLInputElement = event.target as HTMLInputElement;
  const form = event.currentTarget as HTMLFormElement;
  const inputsNumber: NodeList = form.querySelectorAll("input") as NodeList;

  if (target.type === "submit") {
    validateOnSubmit(event, inputsNumber);
  } else {
    const message: HTMLElement = target.parentElement
      ?.nextElementSibling as HTMLElement;
    if (event.type === "blur") {
      validateOnBlur(target, message);
    } else if (event.type === "focus") {
      validateOnFocus(target, message);
    }
  }
};

const formSubmitEvent = {
  submit: (event: Event) => {
    event.preventDefault();
    console.log(user);
  },
};

const formEvents = {
  blur: validateForm,
  focus: validateForm,
  submit: validateForm,
};

export { validateForm, formEvents, formSubmitEvent };
