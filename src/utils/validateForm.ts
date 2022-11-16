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

const validateOnBlur = (target: HTMLInputElement, message: HTMLElement | null) => {
  if (!objValidator[target.name].test(target.value)) {
    target.style.background = "#ea7d7d";
    if (message !== null) message.style.display = "block";
  } else {
    user[target.name as keyof User] = target.value;
  }
};

const validateOnFocus = (target: HTMLInputElement, message:  HTMLElement | null) => {
  target.style.background = "none";
  if (message !== null) message.style.display = "none";
};

const validateOnSubmit = (event: Event, inputsNumber: NodeList) => {
  event.preventDefault();
  if (inputsNumber.length - 1 === Object.keys(user).length) {
    console.log("form is submitted");
  } else {
    inputsNumber.forEach((input: HTMLInputElement) => {
      if (!(input.name in user)) {
        const el = input.parentElement
          ?.nextElementSibling as HTMLElement | null;
        if (el) el.style.display = "block";
      }
    });
    console.log(user);
  }
};

const validateForm = (event: Event) => {
  console.log(event);

  // const target: HTMLInputElement = event.target as HTMLInputElement;
  // const form = event.currentTarget as HTMLFormElement;
  // const inputsNumber: NodeList = form.querySelectorAll("input") as NodeList;


  // if (target.type === "submit") {
  //   // console.log("submit");
  //   validateOnSubmit(event, inputsNumber);
  // } else {
  //   const message: HTMLElement = target.parentElement
  //     ?.nextElementSibling as HTMLElement;
  //   if (event.type === "blur") {
  //     validateOnBlur(target, message);
  //   } else if (event.type === "focus") {
  //     validateOnFocus(target, message);
  //   }
  // }
};

const formSubmitEvent = {
  submit: (event: Event) => {
    event.preventDefault();
    console.log(user);
  },
};

const formEvents = {
  // blur: validateForm,
  // focus: validateForm,
  submit: validateForm,
  // click: validateForm,
};

// const changeAvatar = (avatar: HTMLElement, input: HTMLInputElement) => {
const changeAvatar = (event) => {
  event.target.classList.add("change-avatar");
  event.target.firstElementChild.style.display = "inline";
};

const changeBtnText = (event: Event) => {
  if (event.target) {
    if (event.target.value === "Edit") {
      event.target.value = "Save";
    } else {
      event.target.value = "Edit";
    }
  }
};

const editInputs = (
  inputs: Array<HTMLInputElement>,
  labels: Array<HTMLInputElement>
) => {
  for (const input of inputs) {
    input.style.display = input.style.display === "flex" ? "none" : "flex";
  }
  for (const label of labels) {
    label.style.display = label.style.display != "none" ? "none" : "initial";
  }
};

const editModeToggle = (
  e: InputEvent,
  inputs: Array<HTMLInputElement>,
  labels: Array<HTMLInputElement>
) => {
  editInputs(inputs, labels);
  changeBtnText(e);
};

const editInfo = (event: InputEvent): void => {
  const form = event.currentTarget as HTMLFormElement;
  const inputs = form.querySelectorAll(".edit-inputs");
  const labels = form.querySelectorAll(".edit-labels");
  editModeToggle(event, inputs, labels);
};

const validateProfileForm = (event: Event) => {
  event.preventDefault();
  // console.log(event);
  // console.log(1);
  // const form = event.currentTarget as HTMLFormElement;
  // const target = event.target as HTMLInputElement;
  // // console.log(target.name)
  // if (target.name === "submit") {
  //   editInfo(event);
  // }
  //   console.log('ev.type')
  // } else {
  //   const message: HTMLElement = target.parentElement
  //     ?.nextElementSibling as HTMLElement;
  //   if (event.type === "blur") {
  //     validateOnBlur(target, message);
  //   } else if (event.type === "focus") {
  //     validateOnFocus(target, message);
  //   }
  // };

  // if (target.class !== "button") {
  //   console.log(target.class);
  //   user[target.name as keyof User] = target.value;
  // }
  // console.log(user);
};

const profileFormEvent = {
  // focus: validateProfileForm,
  // blur: validateProfileForm,
  // submit: validateProfileForm,
  // focus: validateForm,
};

// const avatarEvents = {
//   click: changeAvatar,
// };

export {
  validateForm,
  formEvents,
  formSubmitEvent,
  profileFormEvent,
  // avatarEvents,
};
