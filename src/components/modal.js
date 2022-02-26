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
} from "../components/constants.js";

import { hasInvalidInput, toggleButtonState } from "../components/validate.js";

import {
  openPopup,
  closePopup,
  popups,
  closePopEsc,
} from "../components/utils.js";

function openAvatarPopup() {
  const inputList = Array.from(popupFormAvatar.querySelectorAll("input"));
  const buttonElement = popupFormAvatar.querySelector(".button-avatar");
  // const inputElement = popupFormAvatar.querySelector(".url-input-avatar-error");
  avatarLink.value = avatarLink.defaultValue; //Сбросить значения input
  openPopup(document.querySelector(".popup-form-avatar"));
  // clearErrorMessage();
  hasInvalidInput(inputList);
  toggleButtonState(inputList, buttonElement);
}

// Функция обработки смены аватара
function handleAvatarPopup(evt) {
  evt.preventDefault(); // Не открывать в новом окне (сброс значений по умолчанию)
  userPic.src = avatarLink.value; // Заменить значение src
  closePopup(document.querySelector(".popup-form-avatar")); // Закрыть попап
}

//Функция обработки профиля юзера после submit
function handleSubmitProfile(evt) {
  evt.preventDefault(); // Не открывать в новом окне
  userName.textContent = formUserNameInput.value; // Присвоить name значение из формы
  userAbout.textContent = formUserAboutInput.value; // Присвоить about значение из формы
  closePopup(popupFormUser); // Закрыть попап
}

function openProfilePopup() {
  //   // userName.textContent = formUserNameInput.value; // Присвоить name значение из формы
  //   // userAbout.textContent = formUserAboutInput.value; // Присвоить about значение из формы
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
  const inputList = Array.from(cardFormPopup.querySelectorAll("input"));
  const buttonElement = cardFormPopup.querySelector(".form__submit");
  titleInputCard.value = "";
  linkInputCard.value = "";
  openPopup(cardFormPopup);
  hasInvalidInput(inputList);
  toggleButtonState(inputList, buttonElement);
}

// Функция открытия картинки из карточки
function openImagePopup(evt) {
  imageOpen.src = "";
  imageOpen.src = evt.target.src;
  imageOpen.alt = evt.target.alt;
  signImage.textContent = evt.target.alt;
  openPopup(popupImage);
}

//Функция создания новой карточки
function createCard(card) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
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

//Функция удаления карточки
function removeCard(evt) {
  evt.target.closest(".card").remove();
}

//Или написать функцию прямо внутри, сразу после слушателя. Кажется, так красивее
// function createCard(card) {
//   const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
//   cardElement.querySelector(".card__location").textContent = card.name;
//   cardElement.querySelector(".card__img").src = card.link;
//   cardElement.querySelector(".card__img").alt = card.name;
//   cardElement
//     .querySelector(".card__img")
//     .addEventListener("click", openImagePopup);
//   cardElement
//     .querySelector(".card__heart")
//     .addEventListener("click", toggleLikes);
//   cardElement.querySelector(".card__del").addEventListener("click", () => {
//     cardElement.remove();
//   });
//   return cardElement;
// }

//Функция добавления/удаления лайка
function toggleLikes(evt) {
  evt.target.classList.toggle("card__heart_liked");
}

//Всё можно экспортнуть скопом (легче будет копировать в импорт;))))
export {
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
  openAvatarPopup,
  handleAvatarPopup,
  handleSubmitProfile,
  openProfilePopup,
  handleOpenCardPopup,
  openCardPopup,
  openImagePopup,
  createCard,
  addCard,
  removeCard,
  toggleLikes,
};
