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
const cards = document.querySelector('.content');
const likeWithHeart = document.querySelector('.cell__heart');

const initialCards = [
    {
        cardName: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        cardName: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        cardName: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        cardName: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        cardName: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        cardName: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }

];

console.log(initialCards);

const addCard = (card) => {
    const contentCard = `
  <article class="cell">
    <img src=${card.link} alt=${card.cardName} class="cell__img">
    <button type="button" class="cell__del"></button>
    <div class="cell__subscribe">
      <h2 class="cell__location">${card.cardName}</h2>
      <button type="button" class="cell__heart"></button>
    </div>
  </article>
  `;
    console.log(card);
    cards.insertAdjacentHTML('beforeend', contentCard);
};
// initialCards.forEach(card => addCard(card));
initialCards.forEach(addCard);

function addToFavorite() {
    console.log('Лайк!');
    // for (let i = 0; i < likeWithHeart.length; i++) {
    //     likeWithHeart[i].addEventListener("click", addToFavorite);
    // }
    likeWithHeart.classList.toggle('.cell__heart_liked');
}

function formSubmitHandler(e) {
    e.preventDefault();
    userName.textContent = formFirstCell.value;
    userAbout.textContent = formSecondCell.value;
    closePopup();
}

function addNewCard() {
    console.log("addNewCard");
}

function editUser() {
    console.log('editUser');
}

function openPopup(e) {
    console.log('Сим-сим, откройся!', e.target, e.target.value);
    formFirstCell.value = userName.textContent;
    formSecondCell.value = userAbout.textContent;
    cardAddButton.classList.toggle('popup-add-card');
    popupElement.classList.toggle('popup_opened');
    popupElement.classList.remove('popup_fade_out');
    popupElement.classList.add('popup_fade_in');
}

function closePopup() {
    popupElement.classList.toggle('popup_opened');
    popupElement.classList.remove('popup_fade_in');
    popupElement.classList.add('popup_fade_out');
}

function keyUpHandler() {
    if ((popupElement.classList.contains('popup_opened')) && (evt.key === 'Escape')) {
        closePopup()
    }
}

window.addEventListener("keyup", keyUpHandler);
userEditButton.addEventListener("click", editUser);
cardAddButton.addEventListener("click", addNewCard);
formCloseButton.addEventListener("click", closePopup);
formElement.addEventListener('submit', formSubmitHandler);
// likeWithHeart.addEventListener("click", addToFavorite);

