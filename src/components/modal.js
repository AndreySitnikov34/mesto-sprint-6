// const popupFormUser = document.querySelector(".popup-form-user");
// const popupFormAvatar = document.querySelector(".popup-form-avatar");
// const avatarLink = document.querySelector("#url-input-avatar");
// const formUserNameInput = popupFormUser.querySelector("#name-input");
// const formUserAboutInput = popupFormUser.querySelector("#job-input");
// const userName = document.querySelector(".user__name");
// const userAbout = document.querySelector(".user__about");
// const userPic = document.querySelector(".user__pic");
// const cardTemplate = document.querySelector("#card").content;
// const cardFormPopup = document.querySelector(".popup-form-card");
// const titleInputCard = document.querySelector("#text-input");
// const linkInputCard = document.querySelector("#url-input-card");
// const cards = document.querySelector(".content");
// const popupImage = document.querySelector(".popup-image");
// const imageOpen = document.querySelector(".popup__image");
// const signImage = document.querySelector(".popup__image-alt");

// function createCard(card) {
//   const cardElement = cardTemplate.cloneNode(true);
//   cardElement.querySelector(".card__location").textContent = card.name;
//   cardElement.querySelector(".card__img").src = card.link;
//   cardElement.querySelector(".card__img").alt = card.name;
//   cardElement
//     .querySelector(".card__img")
//     .addEventListener("click", openImagePopup);
//   cardElement
//     .querySelector(".card__heart")
//     .addEventListener("click", toggleLikes);
//   cardElement.querySelector(".card__del").addEventListener("click", removeCard);
//   return cardElement;
// }

// const addCard = (card) => {
//   const contentCard = createCard(card);
//   cards.prepend(contentCard);
// };

// function setContent() {
//   initialCards.forEach((content) => addCard(content));
// }

// setContent();

// function openAvatarPopup() {
//   openPopup(popupFormAvatar);
// }

// // Функция обработки смены аватара
// function handleAvatarPopup(evt) {
//   evt.preventDefault(); // Не открывать в новом окне (сброс значений по умолчанию)
//   userPic.src = avatarLink.value; // Заменить значение src
//   closePopup(popupFormAvatar); // Закрыть попап
// }

// //Функция обработки профиля юзера после submit
// function handleSubmitProfile(evt) {
//   evt.preventDefault(); // Не открывать в новом окне
//   userName.textContent = formUserNameInput.value; // Присвоить name значение из формы
//   userAbout.textContent = formUserAboutInput.value; // Присвоить about значение из формы
//   closePopup(popupFormUser); // Закрыть попап
// }

// function openProfilePopup() {
//   openPopup(popupFormUser);
// }

// // Функция обработки создания новой карточки
// function handleOpenCardPopup(evt) {
//   evt.preventDefault(); // Не открывать в новом окне
//   addCard({
//     name: titleInputCard.value,
//     link: linkInputCard.value,
//   });
//   titleInputCard.value = "";
//   linkInputCard.value = "";
//   closePopup(cardFormPopup); // Закрыть попап
// }

// function openCardPopup() {
//   openPopup(cardFormPopup);
// }

// function openImagePopup(evt) {
//   imageOpen.src = "";
//   imageOpen.src = evt.target.src;
//   imageOpen.alt = evt.target.alt;
//   signImage.textContent = evt.target.alt;
//   openPopup(popupImage);
// }

// function removeCard(evt) {
//   evt.target.parentNode.remove();
// }

// function toggleLikes(evt) {
//   evt.target.classList.toggle("card__heart_liked");
// }

// function openPopup(popup) {
//   popup.classList.add("popup_opened");
// }

// // Функция закрытия попапа
// function closePopup(popup) {
//   popup.classList.remove("popup_opened");
// }

// // Функция закрытия попапа по Escape
// window.addEventListener("keydown", closePopEsc);
// function closePopEsc(key) {
//   if (key.key === "Escape") {
//     const pup = document.querySelectorAll(".popup");
//     pup.forEach((popup) => {
//       closePopup(popup);
//     });
//   }
// }

// // Функция закрытия попапа FormAvatar по клику вне попапа
// function closeFormAvatar(popup) {
//   popup.addEventListener("click", (evt) => {
//     if (evt.target === popupFormAvatar) {
//       closePopup(popup);
//     } else {
//       return;
//     }
//   });
// }

// closeFormAvatar(popupFormAvatar);

// // Функция закрытия попапа FormUser по клику вне попапа
// function closeFormUser(popup) {
//   popup.addEventListener("click", (evt) => {
//     if (evt.target === popupFormUser) {
//       closePopup(popup);
//     } else {
//       return;
//     }
//   });
// }

// closeFormUser(popupFormUser);

// // Функция закрытия попапа добавления карточки по клику вне попапа
// function closeFormAddCard(popup) {
//   popup.addEventListener("click", (evt) => {
//     if (evt.target === cardFormPopup) {
//       closePopup(popup);
//     } else {
//       return;
//     }
//   });
// }

// closeFormAddCard(cardFormPopup);

// // Функция закрытия попапа фото по клику вне фото
// function closeFoto(popup) {
//   popup.addEventListener("click", (evt) => {
//     if (evt.target === popupImage) {
//       closePopup(popup);
//     } else {
//       return;
//     }
//   });
// }

// closeFoto(popupImage);

// document
//   .querySelector(".user__overlay")
//   .addEventListener("click", openAvatarPopup);
// document
//   .querySelector(".card__add-button")
//   .addEventListener("click", openCardPopup);
// document
//   .querySelector(".user__info-edit-button")
//   .addEventListener("click", openProfilePopup);
// document.querySelectorAll(".popup__button-close").forEach((element) => {
//   const popup = element.closest(".popup");
//   element.addEventListener("click", () => closePopup(popup));
// });

// popupFormAvatar.addEventListener("submit", handleAvatarPopup);
// popupFormUser.addEventListener("submit", handleSubmitProfile);
// cardFormPopup.addEventListener("submit", handleOpenCardPopup);
