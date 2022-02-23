import "./../index.css";
import {
  showInputError,
  hideInputError,
  isValid,
  hasInvalidInput,
  toggleButtonState,
  setEventListeners,
  enableValidation,
} from "../components/validate.js";

import { initialCards } from "../components/card.js";
// import { enableValidation } from "../components/validate.js";
// import { Modal } from "../components/modal.js";

import {
  popupFormUser,
  popupFormAvatar,
  avatarLink,
  formUserNameInput,
  formUserAboutInput,
  userName,
  userAbout,
  userPic,
  cardTemplate,
  cardFormPopup,
  titleInputCard,
  linkInputCard,
  cards,
  popupImage,
  imageOpen,
  signImage,
} from "../components/utils.js";

//Включение валидации всех форм
enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".button",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "form__input-error",
  errorClass: "form__input-error_active",
});

//Функция создания новой карточки
function createCard(card) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".card__location").textContent = card.name;
  cardElement.querySelector(".card__img").src = card.link;
  cardElement.querySelector(".card__img").alt = card.name;
  cardElement
    .querySelector(".card__img")
    .addEventListener("click", openImagePopup);
  cardElement
    .querySelector(".card__heart")
    .addEventListener("click", toggleLikes);
  cardElement.querySelector(".card__del").addEventListener("click", removeCard);
  return cardElement;
}

const addCard = (card) => {
  const contentCard = createCard(card);
  cards.prepend(contentCard);
};

function setContent() {
  initialCards.forEach((content) => addCard(content));
}

setContent();

function openAvatarPopup() {
  openPopup(popupFormAvatar);
}

// Функция обработки смены аватара
function handleAvatarPopup(evt) {
  evt.preventDefault(); // Не открывать в новом окне (сброс значений по умолчанию)
  userPic.src = avatarLink.value; // Заменить значение src
  closePopup(popupFormAvatar); // Закрыть попап
}

//Функция обработки профиля юзера после submit
function handleSubmitProfile(evt) {
  evt.preventDefault(); // Не открывать в новом окне
  userName.textContent = formUserNameInput.value; // Присвоить name значение из формы
  userAbout.textContent = formUserAboutInput.value; // Присвоить about значение из формы
  closePopup(popupFormUser); // Закрыть попап
}

function openProfilePopup() {
  openPopup(popupFormUser);
}

// Функция обработки создания новой карточки
function handleOpenCardPopup(evt) {
  evt.preventDefault(); // Не открывать в новом окне
  addCard({
    name: titleInputCard.value,
    link: linkInputCard.value,
  });
  titleInputCard.value = "";
  linkInputCard.value = "";
  closePopup(cardFormPopup); // Закрыть попап
}

function openCardPopup() {
  openPopup(cardFormPopup);
}

// Функция открытия картинки из карточки
function openImagePopup(evt) {
  imageOpen.src = "";
  imageOpen.src = evt.target.src;
  imageOpen.alt = evt.target.alt;
  signImage.textContent = evt.target.alt;
  openPopup(popupImage);
}

function removeCard(evt) {
  evt.target.parentNode.remove();
}

function toggleLikes(evt) {
  evt.target.classList.toggle("card__heart_liked");
}

// Функция открытия попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

// Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

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

// Функция закрытия попапа FormAvatar по клику вне попапа
function closeFormAvatar(popup) {
  popup.addEventListener("click", (evt) => {
    if (evt.target === popupFormAvatar) {
      closePopup(popup);
    } else {
      return;
    }
  });
}

closeFormAvatar(popupFormAvatar);

// Функция закрытия попапа FormUser по клику вне попапа
function closeFormUser(popup) {
  popup.addEventListener("click", (evt) => {
    if (evt.target === popupFormUser) {
      closePopup(popup);
    } else {
      return;
    }
  });
}

closeFormUser(popupFormUser);

// Функция закрытия попапа добавления карточки по клику вне попапа
function closeFormAddCard(popup) {
  popup.addEventListener("click", (evt) => {
    if (evt.target === cardFormPopup) {
      closePopup(popup);
    } else {
      return;
    }
  });
}

closeFormAddCard(cardFormPopup);

// Функция закрытия попапа фото по клику вне фото
function closeFoto(popup) {
  popup.addEventListener("click", (evt) => {
    if (evt.target === popupImage) {
      closePopup(popup);
    } else {
      return;
    }
  });
}

closeFoto(popupImage);

document
  .querySelector(".user__overlay")
  .addEventListener("click", openAvatarPopup);
document
  .querySelector(".card__add-button")
  .addEventListener("click", openCardPopup);
document
  .querySelector(".user__info-edit-button")
  .addEventListener("click", openProfilePopup);
document.querySelectorAll(".popup__button-close").forEach((element) => {
  const popup = element.closest(".popup");
  element.addEventListener("click", () => closePopup(popup));
});

popupFormAvatar.addEventListener("submit", handleAvatarPopup);
popupFormUser.addEventListener("submit", handleSubmitProfile);
cardFormPopup.addEventListener("submit", handleOpenCardPopup);

// enableValidation();

// const isValid = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     hideInputError(formElement, inputElement);
//   }
// };

// export const hasInvalidInput = (inputList) => {
//   // Шаримся по массиву методом some в поисках валидности
//   return inputList.some((inputElement) => {
//     // Если поле не валидно, колбэк вернёт true
//     return !inputElement.validity.valid;
//   });
// };

// export const toggleButtonState = (inputList, buttonElement) => {
//   // Если есть хотя бы один невалидный инпут
//   const isInputValid = hasInvalidInput(inputList);
//   if (isInputValid) {
//     buttonElement.classList.add("form__submit_inactive");
//     // console.log('Кнопка submit НЕ АКТИВНА', buttonElement, inputList);
//   } else {
//     buttonElement.classList.remove("form__submit_inactive");
//     // console.log('Кнопка submit активна', buttonElement, inputList);
//   }
// };

// export const setEventListeners = (formElement) => {
//   // Находим ВСЕ поля внутри формы, делаем из них массив методом Array.from
//   const inputList = Array.from(formElement.querySelectorAll(".form__input"));
//   const buttonElement = formElement.querySelector(".form__submit");
//   // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
//   toggleButtonState(inputList, buttonElement);
//   // Обходм все элементы полученной коллекции
//   inputList.forEach((inputElement) => {
//     // каждому полю добавляем обработчик события input
//     inputElement.addEventListener("input", () => {
//       // Внутри колбэка вызываем isValid, передав ей форму и проверяемый элемент
//       isValid(formElement, inputElement);
//       // Вызовем toggleButtonState и передадим ей массив полей и кнопку
//       toggleButtonState(inputList, buttonElement);
//     });
//   });
// };

// export const enableValidation = () => {
//   // Находим все формы с указанным классом в DOM, делаем из них массив
//   const formList = Array.from(document.querySelectorAll(".form"));
//   // Переберём полученную коллекцию
//   formList.forEach((formElement) => {
//     formElement.addEventListener("submit", (evt) => {
//       // На каждой форме сбросим дефолты
//       evt.preventDefault();
//     });
//     // Для каждой формы вызовем setEventListeners,передав ей элемент формы.
//     setEventListeners(formElement);
//   });
// };
