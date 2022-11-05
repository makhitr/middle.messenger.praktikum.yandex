export const events = {
  blur: (e: Event) => validateForm(e)
}

const objValidator = {
  login: /^[a-zA-Z][a-zA-Z0-9-_\.]{3,20}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,40}$/,
  email: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
  first_name: /^[A-ZА-Я][a-zA-Zа-яА-Я-]/,
  second_name: /^[A-ZА-Я][a-zA-Zа-яА-Я-]/,
  phone: /^(\+|\d)[\d]{10,15}$/,
  message: /[\w]{5}/
};

const user = {}

const validateForm = (event) => {
  const target = event.currentTarget;
  if (target.name === 'submit') {
    event.preventDefault();
    console.log(user)
  } else {
    if (!objValidator[target.name].test(target.value)) {
      target.style.background = "red";
      target.focus();
    } else {
      user[target.name] = target.value
      target.style.background = "none";
    }
  }

};
export default validateForm;
