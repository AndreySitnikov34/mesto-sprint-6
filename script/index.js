console.log('Поехали! © Ю.А.Гагарин')
const popupUserElement = document.querySelector('.popup-form-user');
// const cardFormPopup = document.querySelector('.popup-add-card');
// const cardForm = document.querySelector('.popup__card');
// const popupImage = document.querySelector('.popup-img');
const formUserFirstCell = popupUserElement.querySelector('#first-cell-user');
const formUserSecondCell = popupUserElement.querySelector('#second-cell-user');
const formUserElement = popupUserElement.querySelector('.form-user');
const formCloseButton = popupUserElement.querySelector('.popup__button-close');//?
const userEditButton = document.querySelector('.user__info-edit-button');//?
const userName = document.querySelector('.user__name');
const userAbout = document.querySelector('.user__about');
const cardAddButton = document.querySelector('.card__add-button');//?
const cardImage= document.querySelector('.card__img');
const cardName= document.querySelector('#cardName');
const cardLink= document.querySelector('#cardLink');
const cards = document.querySelector('.content');
const likeWithHeart = document.querySelector('.card__heart');//?

function addUserHandler(e) {
    e.preventDefault();
    userName.textContent = formUserFirstCell.value;
    userAbout.textContent = formUserSecondCell.value;
    closePopup();
}

function addUser() {
    formUserFirstCell.value = userName.textContent;
    formUserSecondCell.value = userAbout.textContent;
    popupUserElement.addEventListener('submit', addUserHandler);
    openPopup();
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
console.log(initialCards);

const addCard = (card) => {
    const contentCard = `
  <article class="card">
    <img src=${card.cardLink} alt=${card.cardName} class="card__img">
    <button type="button" class="card__del"></button>
    <div class="card__subscribe">
      <h2 class="card__location">${card.cardName}</h2>
      <button type="button" class="card__heart"></button>
    </div>
  </article>
  `;
  //   const contentCard = `<div><img src=${card.cardLink} alt=${card.cardName} class="card__img"></div>`;
  //   console.log("content");
  //   console.log(card);
    cards.insertAdjacentHTML('afterbegin', contentCard);

};

function setContent () {
    initialCards.forEach(content => addCard(content));
    // initialCards.forEach(addCard);
}

// function addCard () {
//     cardForm.addEventListener('submit', addCardHandler);
//     currentPopupElement = cardFormPopup;
//     openPopup();
// }

setContent ()
document.querySelector('.user__info-edit-button').addEventListener('click', addUser);
document.querySelector('.card__add-button').addEventListener('click', addCard);
document.querySelectorAll('.popup__button-close').forEach((element) => {element.addEventListener('click', closePopup)});

// function addToFavorite(e) {
//     console.log('Лайк!');
//     e.target.classList.toggle('.cell__heart_liked');
// }

function openPopup(e) {
    console.log('Сим-сим, откройся!', e.target, e.target.value);
    currentPopupElement.classList.toggle('popup_opened');
    currentPopupElement.classList.remove('popup_fade_out');
    currentPopupElement.classList.add('popup_fade_in');
}

function closePopup() {
    currentPopupElement.classList.remove('popup_fade_in');
    currentPopupElement.classList.add('popup_fade_out');
}

function keyUpHandler() {
    if ((currentPopupElement.classList.contains('popup_opened')) && (evt.key === 'Escape')) {
        closePopup()
    }
}

function imagePopup (e) {
    cardImage.src="";
    cardImage.src=e.target.src;
    cardImage.alt=e.target.alt;
    currentPopupElement = popupImage;
    openPopup();
}

window.addEventListener("keyup", keyUpHandler);
userEditButton.addEventListener("click", addUser);
cardAddButton.addEventListener("click", addCard);
formCloseButton.addEventListener("click", closePopup);
formUserElement.addEventListener('submit', addUserHandler);
// likeWithHeart.addEventListener("click", addToFavorite);

