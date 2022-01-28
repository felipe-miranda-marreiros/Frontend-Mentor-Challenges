//All inputs
const inputValue = document.querySelectorAll(".inputValue");

//Errors messages
const textError = document.querySelectorAll(".text-error");

//Icons errors
const iconErrors = document.querySelectorAll(".error-icon");

/////////////////////////////////////////

const firstName = document.querySelector(".inputValue");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const btnClaim = document.querySelector(".btn-form");

/////////////////////////////////////////

function emailValidation(ValueToCheck) {
  const pattern =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const currentValue = ValueToCheck.value;
  const valid = pattern.test(currentValue);

  return valid;
}

function setError(index, message) {
  textError.item(index).innerText = message;
  iconErrors.item(index).removeAttribute("hidden");
  inputValue.item(index).classList.add("empty-error");
  inputValue.item(index).classList.remove("success");
}

function setSuccess(index) {
  textError.item(index).innerText = "";
  iconErrors.item(index).setAttribute("hidden", "");
  inputValue.item(index).classList.remove("empty-error");
  inputValue.item(index).classList.add("success");
}

btnClaim.addEventListener("click", function (event) {
  event.preventDefault();

  if (firstName.value === "") {
    setError(0, "First Name cannot be empty");
  } else {
    setSuccess(0);
  }
  if (lastName.value === "") {
    setError(1, "Last Name cannot be empty");
  } else {
    setSuccess(1);
  }

  if (email.value === "") {
    setError(2, "Email cannot be empty");
  } else if (!emailValidation(email)) {
    setError(2, "Looks like this is not an email");
  } else {
    setSuccess(2);
  }
  if (password.value === "") {
    setError(3, "Password cannot be empty");
  } else {
    setSuccess(3);
  }
});
