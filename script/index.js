console.log('Поехали! © Ю.А.Гагарин')
const popupElement = document.querySelector('.popup');
const formFirstCell = popupElement.querySelector('#first-cell');
const formSecondCell = popupElement.querySelector('#second-cell');
const formElement = popupElement.querySelector('.form');
const formCloseButton = popupElement.querySelector('.popup__button-close');
const userEditButton = document.querySelector('.user__info-edit-button');
const userName = document.querySelector('.user__name');
const userAbout = document.querySelector('.user__about');
const cardAddButton = document.querySelector('.card__add-button');
const popupPhoto = document.querySelector('.popup__photo-large');
const popupPhotoCaption = document.querySelector('.popup__photo-caption');
const imagelink = document.querySelector('.card__image');
const cellImg = document.querySelector('.cell__img');
// const cards = document.querySelector('.content');
// const cell = document.querySelector('cell');
const likeWithHeart = document.querySelector('.cell__heart');

const addCard = (cardName) => {
  return `
  <article class="cell">
        <div class="cell__subscribe">
            <h2 class="cell__location">${cardName}</h2>
            <button type="button" class="cell__heart">
            </button>
        </div>
    </article>
  `;
}

function addToFavorite() {
    console.log('Лайк!');
    // likeWithHeart.classList.toggle('cell__heart:active');
    likeWithHeart.classList.toggle('cell__heart_liked');
}


function formSubmitHandler(evt) {
    evt.preventDefault();
    userName.textContent = formFirstCell.value;
    userAbout.textContent = formSecondCell.value;
    closePopup();
}

function openPopup() {
    console.log('Сим-сим, откройся!');
    formFirstCell.value = userName.textContent;
    formSecondCell.value = userAbout.textContent;
    popupElement.classList.toggle('popup_opened');
}

function closePopup() {
    popupElement.classList.toggle('popup_opened');
}

function showPhoto() {
    openPopup(popupImage);
    popupPhoto.src = imagelink.src;
    popupPhoto.alt = imagelink.alt;
    popupPhotoCaption.textContent = placeName.textContent;
}

function keyUpHandler() {
    if ((popupElement.classList.contains('popup_opened')) && (evt.key === 'Escape')) {
        closePopup()
    }
}


window.addEventListener("keyup", keyUpHandler);
userEditButton.addEventListener("click", openPopup);
cardAddButton.addEventListener("click", openPopup);
formCloseButton.addEventListener("click", closePopup);
formElement.addEventListener('submit', formSubmitHandler);
imagelink.addEventListener('click', showPhoto);
cellImg.addEventListener("click".openImage);
likeWithHeart.addEventListener("click", addToFavorite);
// function addSong(artistValue, titleValue) {
//
//     songElement.querySelector('.song__like').addEventListener('click', function (evt) {
//         console.log(evt);
//     });