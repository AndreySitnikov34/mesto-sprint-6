console.log('Поехали! © Ю.А.Гагарин')
const popupFormUser = document.querySelector('.popup-form-user');
const cardFormPopup = document.querySelector('.popup-add-card');
const cardForm = document.querySelector('.popup__card');
const popupImage = document.querySelector('.popup-image');
const formUserFirstCell = popupFormUser.querySelector('#first-cell-user');
const formUserSecondCell = popupFormUser.querySelector('#second-cell-user');
const formUserElement = popupFormUser.querySelector('.form-user');
const formCloseButton = popupFormUser.querySelector('.popup__button-close');//?
const userEditButton = document.querySelector('.user__info-edit-button');//?
const userName = document.querySelector('.user__name');
const userAbout = document.querySelector('.user__about');
const cardAddButton = document.querySelector('.card__add-button');
const cardImage= document.querySelector('.popup__image');
const cardLocation = document.querySelector('.card__location');
const cardName= document.querySelector('#cardName');
const cardLink= document.querySelector('#cardLink');
const cards = document.querySelector('.content');
const heartLike = document.querySelector('.card__heart');
let currentPopupElement;

function addUserHandler(e) {
    console.log("Обработчик юзера");
    e.preventDefault();
    userName.textContent = formUserFirstCell.value;
    userAbout.textContent = formUserSecondCell.value;
    closePopup();
}

function addUser() {
    console.log("Редактировать юзера");
    // formUserFirstCell.value = userName.textContent;
    // formUserSecondCell.value = userAbout.textContent;
    popupFormUser.addEventListener('submit', addUserHandler);
    currentPopupElement = popupFormUser;
    popupFormUser.classList.remove('popup_fade_out');
    popupFormUser.classList.add('popup_fade_in');
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

setContent ()

function addNewCardHandler (e) {
    console.log("Обработчик карточки")
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
    // cardName.value = cardLocation.textContent;
    // cardLink.value = cardLink.textContent;
    cardForm.addEventListener('submit', addNewCardHandler);
    currentPopupElement = cardFormPopup;
    // openPopup();
    cardFormPopup.classList.remove('popup_fade_out');
    cardFormPopup.classList.add('popup_fade_in');
}

function removeCard (e) {
    console.log('GARBAGE!');
    e.target.parentNode.remove();
}



function addToFavorite() {
    console.log('Лайк!');
    heartLike.classList.toggle('.card__heart_liked');
}

function openPopup() {
    console.log('Сим-сим, откройся!');
}

function closePopup() {
    console.log('Сим-сим, закройся!');
    popupFormUser.classList.remove('popup_fade_in');
    popupFormUser.classList.add('popup_fade_out');
}

function keyUpHandler() {
    if ((popupFormUser.classList.contains('popup_opened')) && (e.key === 'Escape')) {
        closePopup()
    }
}

function popupImageHandler(e) {
    console.log('Обработчик картинки');
    closePopup();
}

function imagePopup () {
    console.log("Открыть картинку в полный рост");
    popupImage.addEventListener('click',popupImageHandler);
    cardImage.src='';
    // cardImage.src=e.target.src;
    // cardImage.alt=e.target.alt;
    currentPopupElement = popupImage;
    openPopup();
}

window.addEventListener("keyup", keyUpHandler);
cardAddButton.addEventListener("click", addNewCard);
formCloseButton.addEventListener("click", closePopup);
formUserElement.addEventListener('submit', openPopup);
userEditButton.addEventListener('click', addUser);
// heartLike.addEventListener('click', addToFavorite);
document.querySelector('.card__add-button').addEventListener('click', addCard);
document.querySelectorAll('.popup__button-close').forEach((element) => {element.addEventListener('click', closePopup)});

