console.log('Поехали! © Ю.А.Гагарин')
const popupUserElement = document.querySelector('.popup-form-user');
const cardFormPopup = document.querySelector('.popup-add-card');
const cardForm = document.querySelector('.popup__card');
const popupImage = document.querySelector('.popup__image');
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
const heartLike = document.querySelector('.card__heart');
let currentPopupElement;

function addUserHandler(e) {
    e.preventDefault();
    userName.textContent = formUserFirstCell.value;
    userAbout.textContent = formUserSecondCell.value;
    closePopup();
}

function addUser() {
    console.log("Редактировать юзера");
    formUserFirstCell.value = userName.textContent;
    formUserSecondCell.value = userAbout.textContent;
    popupUserElement.addEventListener('submit', addUserHandler);
    // currentPopupElement = popupUserElement;
    popupUserElement.classList.remove('popup_fade_out');
    popupUserElement.classList.add('popup_fade_in');
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
    console.log(card);
    cards.insertAdjacentHTML('afterbegin', contentCard);
    cards.querySelector('.card__img').addEventListener('click', imagePopup);
    cards.querySelector('.card__heart').addEventListener('click', addToFavorite);
    cards.querySelector('.card__del').addEventListener('click', removeCard);
};

function setContent () {
    initialCards.forEach(content => addCard(content));
    // initialCards.forEach(addCard);
}

function addNewCardHandler (e) {
    console.log("Нажать чтоб добавить открытку")
    e.preventDefault();
    addNewCard({
        cardName: cardName.value,
        cardLink: cardLink.value
    })
    cardName.value = cardName.defaultValue;
    cardLink.value = cardLink.defaultValue;
    closePopup();
}

function addNewCard () {
    console.log("Добавить карточку");
    cardForm.addEventListener('submit', addNewCardHandler);
    currentPopupElement = cardFormPopup;
    openPopup();
}

function removeCard (e) {
    e.target.parentNode.remove();
}



function addToFavorite(e) {
    console.log('Лайк!');
    heartLike.classList.toggle('.card__heart_liked');
}

function openPopup(e) {
    console.log('Сим-сим, откройся!');
}

function closePopup() {
    console.log('Сим-сим, закройся!');
    popupUserElement.classList.remove('popup_fade_in');
    popupUserElement.classList.add('popup_fade_out');
}

function keyUpHandler() {
    if ((currentPopupElement.classList.contains('popup_opened')) && (e.key === 'Escape')) {
        closePopup()
    }
}

function imagePopup (e) {
    console.log("Открыть картинку в полный рост");
    cardImage.src='';
    cardImage.src=e.target.src;
    cardImage.alt=e.target.alt;
    currentPopupElement = popupImage;
    openPopup();
}

setContent ()

window.addEventListener("keyup", keyUpHandler);
cardAddButton.addEventListener("click", addNewCard);
formCloseButton.addEventListener("click", closePopup);
formUserElement.addEventListener('submit', openPopup);
userEditButton.addEventListener('click', addUser);
document.querySelector('.card__add-button').addEventListener('click', addCard);
document.querySelectorAll('.popup__button-close').forEach((element) => {element.addEventListener('click', closePopup)});

