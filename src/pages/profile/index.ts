export const pageProfileInfo = {
  link: "profile",
  pageName: "Profile Page",
  title: "My Messenger Profile",
  userInfo: {
    fname: "Peter",
    sname: "Pan",
    login: "PeterPan",
    email: "peter@scottish.com",
    phone: "+1902-1922-11",
    password: "*********",
  },
};

const changeAvatar = (avatar, input) => {
  avatar.classList.add("change-avatar");
  input.style.display = "inline";
};

const editInputs = (inputs, labels) => {
  for (let input of inputs) {
    input.style.display = input.style.display === "flex" ? "none" : "flex";
  }
  for (let label of labels) {
    label.style.display = label.style.display != "none" ? "none" : "initial";
  }
};

const changeBtnText = (btn) => {
  btn.textContent =
    btn.textContent === "save changes" ? "edit profile" : "save changes";
};

const editModeToggle = (e, inputs, labels) => {
  editInputs(inputs, labels);
  changeBtnText(e.target);
};

export const editInfo = () => {
  const btn = document.querySelector(".button");
  const inputs = document.querySelectorAll(".edit-inputs");
  const labels = document.querySelectorAll(".edit-labels");
  const avatar = document.querySelector(".avatar");
  const inputAvatar = document.querySelector(".input-avatar");
  btn.addEventListener("click", (e) => editModeToggle(e, inputs, labels));
  avatar.addEventListener("click", () => changeAvatar(avatar, inputAvatar));
};
