

const openModalBtn = document.querySelector("#openModalBtn");
const closeModalBtn = document.querySelector("#closeModalBtn");
const modal = document.querySelector("#modal");
const modalBackground = document.querySelector("#modalBackground");
const modalContent = modal.querySelector("#modalContent");
const modalTitle = document.querySelector("#modalTitle");
const body = document.querySelector("body");

export const callModal = (response) => {
  const modalTitleColor = {
    error: "#c41e3a",
    success: "#4BB543",
    default: "#191919",
  };

  let message;
  let title;
  let responseJSON;
  let currentColorTitle;

  const closeModal = () => {
    modal.classList.remove("show");
    modalBackground.classList.remove("show");
    body.classList.remove("show-modal");
    modalContent.textContent = "";
  };
  const openModal = () => {
    modal.classList.add("show");
    modalBackground.classList.add("show");
    body.classList.add("show-modal");
    modalContent.textContent = message;
    modalTitle.textContent = title;
    modalTitle.style.color = currentColorTitle;
  };

  if (response) {
    const responseObject = JSON.parse(response.response);
    if (!responseObject) return;
    if (response.status === 200) {
      title = "Уведомление";
      message = responseObject.message;
      currentColorTitle = modalTitleColor.success;
    } else {
      console.log(responseObject);
      title = "Ошибка";
      if (!responseObject.fields) {
        message = "Ошибка сервера";
      } else {
        message = responseObject.fields.inputName || "Ошибка сервера";
      }
      currentColorTitle = modalTitleColor.error;
    }
    openModal();
  }

  openModalBtn.addEventListener("click", () => {
    currentColorTitle = modalTitleColor.default;
    message = `Frontend-разработчик с более чем 1,5-летним опытом создания веб-приложений на VanilaJS(TypeScript) и SPA для React, Redux. Коммуникабельный и умеющий работать в команде. Буду рад стать частью ваше команды!`;
    title = "Обо мне";
    openModal();
  });
  closeModalBtn.addEventListener("click", closeModal);
  modalBackground.addEventListener("click", closeModal);
};
