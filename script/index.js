const popupFormUser = document.querySelector('.popup-form-user');
const cardFormPopup = document.querySelector('.popup-form-card');
const popupImage = document.querySelector('.popup-image');
const imageOpen = document.querySelector('.popup__image');
const signImage = document.querySelector('.popup__image-alt');
const formUserFirstCell = popupFormUser.querySelector('#first-cell-user');
const formUserSecondCell = popupFormUser.querySelector('#second-cell-user');
const formUserElement = popupFormUser.querySelector('.form-user');
const formCloseButton = popupFormUser.querySelector('.popup__button-close');//?
const userEditButton = document.querySelector('.user__info-edit-button');//?
const userName = document.querySelector('.user__name');
const userAbout = document.querySelector('.user__about');
const cardAddButton = document.querySelector('.card__add-button');
const firstCellCard= document.querySelector('#first-cell-card');
const secondCellCard= document.querySelector('#second-cell-card');
const cards = document.querySelector('.content');

function addUserHandler(evt) {
    evt.preventDefault();
    userName.textContent = formUserFirstCell.value;
    userAbout.textContent = formUserSecondCell.value;
    closePopup();
}

function addUser() {
    popupFormUser.addEventListener('submit', addUserHandler);
    openPopup(popupFormUser);
}

function addNewCardHandler (evt) {
    evt.preventDefault();
    addCard({
        cardName: firstCellCard.value,
        cardLink: secondCellCard.value
    })
    firstCellCard.value = firstCellCard.defaultValue;
    secondCellCard.value = secondCellCard.defaultValue;
    closePopup();
}

function addNewCard () {
    cardFormPopup.addEventListener('submit', addNewCardHandler);
    openPopup(cardFormPopup);
}

function imagePopup (evt) {
    popupImage.addEventListener('click',closePopup);
    imageOpen.src='';
    imageOpen.src=evt.target.src;
    imageOpen.alt=evt.target.alt;
    signImage.textContent = evt.target.alt;
    openPopup(popupImage);
}

const initialCards = [
    {
        cardName: 'Архыз',
        cardLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        cardName: 'Челябинская область',
        cardLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        cardName: 'Иваново',
        cardLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        cardName: 'Камчатка',
        cardLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        cardName: 'Холмогорский район',
        cardLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        cardName: 'Байкал',
        cardLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }

];

const addCard = (card) => {
    const contentCard = `
  <article class="card">
    <img src=${card.cardLink} alt='${card.cardName}' class="card__img">
    <button type="button" class="card__del"></button>
    <div class="card__subscribe">
      <h2 class="card__location">${card.cardName}</h2>
      <button type="button" class="card__heart"></button>
    </div>
  </article>
  `;
    // console.log(card);
    cards.insertAdjacentHTML('afterbegin', contentCard);
    cards.querySelector('.card__img').addEventListener('click', imagePopup);
    cards.querySelector('.card__heart').addEventListener('click', addToFavorite);
    cards.querySelector('.card__del').addEventListener('click', removeCard);
};

function setContent () {
    initialCards.forEach(content => addCard(content));
    // initialCards.forEach(addCard);
}

setContent ()

function removeCard (evt) {
    evt.target.parentNode.remove();
}

function addToFavorite(evt) {
    evt.target.classList.toggle('card__heart_liked');
}

function openPopup(popupElement) {
    popupElement.classList.remove('popup_fade_out');
    popupElement.classList.add('popup_fade_in');
}

function closePopup() {
    popupFormUser.classList.remove('popup_fade_in');
    popupFormUser.classList.add('popup_fade_out');
    cardFormPopup.classList.remove('popup_fade_in');
    cardFormPopup.classList.add('popup_fade_out');
    popupImage.classList.remove('popup_fade_in');
    popupImage.classList.add('popup_fade_out');
}

function keyUpHandler() {
    if ((popupFormUser.classList.contains('popup_opened')) && (e.key === 'Escape')) {
        closePopup()
    }
}

window.addEventListener("keyup", keyUpHandler);
cardAddButton.addEventListener("click", addNewCard);
formCloseButton.addEventListener("click", closePopup);
formUserElement.addEventListener('submit', openPopup);
userEditButton.addEventListener('click', addUser);
document
    .querySelectorAll('.popup__button-close')
    .forEach((element) => element.addEventListener('click', closePopup));

