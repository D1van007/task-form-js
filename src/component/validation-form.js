const form = document.querySelector("#form");
const inputName = form.querySelector("#inputName");
const inputEmail = form.querySelector("#inputEmail");
const inputTel = form.querySelector("#inputTel");
const textareaMessage = form.querySelector("#textarea");

const isValidForm = () => {
  //   const addErrorMessage = (currentInput, message) => {
  //     const errorMessageNode = document.createElement("p");
  //     errorMessageNode.textContent = message;
  //     currentInput.insertAdjacentElement("afterend", errorMessageNode);
  //   };

  const addValidationMessage = (isValid, currentInput, message) => {
    console.log(currentInput.nextElementSibling);
    if (!isValid) {
      currentInput.classList.add("error");
      currentInput.nextElementSibling.textContent = message;
    } else {
      currentInput.classList.remove("error");
      if (currentInput.nextElementSibling) {
        currentInput.nextElementSibling.textContent = "";
      }
    }
  };

  const validName = () => {
    const isValidName = !!inputName.value;
    addValidationMessage(isValidName, inputName, "Необходимо ввести имя");
    return isValidName;
  };

  const validEmail = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isValidEmail = emailRegex.test(inputEmail.value);
    addValidationMessage(isValidEmail, inputEmail, "Введите корректный адрес эл.почты");
    return isValidEmail;
  };

  const validTel = () => {
    const telRegex = /^\+375 \((17|29|25|33|44)\) \d{3}-\d{2}-\d{2}$/;
    const isValidTel = telRegex.test(inputTel.value);
    addValidationMessage(isValidTel, inputTel, "Введите корректный номер телефона");
    return isValidTel;
  };

  const validMessage = () => {
    const isValidMessage = !!textareaMessage.value;
    addValidationMessage(isValidMessage, textareaMessage, "Необходимо ввести ссобщение");
    return isValidMessage;
  };

  return validName() && validEmail() && validTel() && validMessage();
};

export const validationForm = () => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    isValidForm() && form.submit();
  });
};
