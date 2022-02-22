// Функция закрытия попапа по Escape

window.addEventListener("keydown", closePopEsc);
function closePopEsc(key) {
  if (key.key === "Escape") {
    const pup = document.querySelectorAll(".popup");
    pup.forEach((popup) => {
      closePopup(popup);
    });
  }
}

export default utils;
