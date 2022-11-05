const validateForm = (event) => {
  console.log("event", event.target.name);

  const obj = {
    login: /^[a-zA-Z][a-zA-Z0-9-_\.]{3,20}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,40}$/,
  };

  const target = event.currentTarget;

  if (!obj[target.name].test(target.value)) {
    target.style.background = "red";
    target.focus();
  } else {
    target.style.background = "none";
  }

  event.stopPropagation();
};
export default validateForm;
