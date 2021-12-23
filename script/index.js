const popupFormUser = document.querySelector('.popup-form-user');
const formUserNameInput = popupFormUser.querySelector('#first-cell-user');
const formUserJobInput = popupFormUser.querySelector('#second-cell-user');
const userName = document.querySelector('.user__name');
const userAbout = document.querySelector('.user__about');
const cardTemplate = document.querySelector('#card').content;
const cardFormPopup = document.querySelector('.popup-form-card');
const titleInputCard = document.querySelector('#first-cell-card');
const linkInputCard = document.querySelector('#second-cell-card');
const cards = document.querySelector('.content');
const popupImage = document.querySelector('.popup-image');
const imageOpen = document.querySelector('.popup__image');
const signImage = document.querySelector('.popup__image-alt');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }

];

function createCard(card) {
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.card__location').textContent = card.name;
    cardElement.querySelector('.card__img').src = card.link;
    cardElement.querySelector('.card__img').alt = card.name;
    cardElement.querySelector('.card__img').addEventListener('click', openImagePopup);
    cardElement.querySelector('.card__heart').addEventListener('click', toggleLikes);
    cardElement.querySelector('.card__del').addEventListener('click', removeCard);
    return cardElement
}

const addCard = (card) => {
    const contentCard = createCard(card);
    cards.prepend(contentCard);
}

function setContent () {
    initialCards.forEach(content => addCard(content));
    // initialCards.forEach(addCard);
}

setContent ()

function handleSubmitProfile(evt) {
    evt.preventDefault();
    userName.textContent = formUserNameInput.value;
    userAbout.textContent = formUserJobInput.value;
    popupFormUser.classList.remove('popup_opened');
}

function openProfilePopup() {
    // popupFormUser.addEventListener('submit', addUserHandler, {once: true});
    openPopup(popupFormUser);
}

function handleOpenCardPopup (evt) {
    evt.preventDefault();
    addCard({
        name: titleInputCard.value,
        link: linkInputCard.value
    })
    titleInputCard.value = '';
    linkInputCard.value = '';
    cardFormPopup.classList.remove('popup_opened');
}

function openCardPopup () {
    // cardFormPopup.addEventListener('submit', handleAddNewCard, {once: true});
    openPopup(cardFormPopup);
}

function openImagePopup (evt) {
    imageOpen.src='';
    imageOpen.src=evt.target.src;
    imageOpen.alt=evt.target.alt;
    signImage.textContent = evt.target.alt;
    openPopup(popupImage);
}

function removeCard (evt) {
    evt.target.parentNode.remove();
}

function toggleLikes(evt) {
    evt.target.classList.toggle('card__heart_liked');
}

function openPopup(popup) {
    console.log("Открыт попап");
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    console.log("Закрыт попап");
    popup.classList.remove('popup_opened');
}

document.querySelector('.card__add-button').addEventListener("click", openCardPopup);
document.querySelector('.user__info-edit-button').addEventListener('click', openProfilePopup);
document.querySelector('.form__submit-button').addEventListener('submit', () => closePopup());
document
    .querySelectorAll('.popup__button-close')
    .forEach((element) => {
        const popup = element.closest('.popup')
        element.addEventListener('click', () => closePopup(popup))
    });

popupFormUser.addEventListener('submit', handleSubmitProfile);
cardFormPopup.addEventListener('submit', handleOpenCardPopup);