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
    closePopup(popupFormUser);
    // popupFormUser.classList.remove('popup_opened');
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
    closePopup(cardFormPopup);
    // cardFormPopup.classList.remove('popup_opened');
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

// Функция закрытия попапа

function closePopup(popup) {
    console.log("Закрыт попап");
    popup.classList.remove('popup_opened');
}

// Функция закрытия попапа по Escape

    document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
            console.log("evt.key");
           closePopup(popupFormUser);
           closePopup(cardFormPopup);
           closePopup(popupImage);
        } console.log("Закрыт попап по Escape");
    })

// Функция закрытия попапа FormUser по клику вне попапа

function closeFormUser(popup) {
    popup.addEventListener('click', (evt) => {
        if (evt.target === popupFormUser) {
            closePopup(popup);
        } 
        else {
            return
        }
    })
}

closeFormUser(popupFormUser)

// Функция закрытия попапа добавления карточки по клику вне попапа

function closeFormAddCard(popup) {
    popup.addEventListener('click', (evt) => {
        if (evt.target === cardFormPopup) {
            closePopup(popup);
        } 
        else {
            return
        }
    })
}

closeFormAddCard(cardFormPopup)

// Функция закрытия попапа фото по клику вне фото

function closeFoto(popup) {
    popup.addEventListener('click', (evt) => {
        if (evt.target === popupImage) {
            closePopup(popup);
        } 
        else {
            return
        }
    })
}

closeFoto(popupImage)

document.querySelector('.card__add-button').addEventListener("click", openCardPopup);
document.querySelector('.user__info-edit-button').addEventListener('click', openProfilePopup);
document
    .querySelectorAll('.popup__button-close')
    .forEach((element) => {
        const popup = element.closest('.popup')
        element.addEventListener('click', () => closePopup(popup))
    });

popupFormUser.addEventListener('submit', handleSubmitProfile);
cardFormPopup.addEventListener('submit', handleOpenCardPopup);