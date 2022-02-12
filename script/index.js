const popupFormUser = document.querySelector('.popup-form-user');
const popupFormAvatar = document.querySelector('.popup-form-avatar');
const avatarLink = document.querySelector('#url-input');
const formUserNameInput = popupFormUser.querySelector('#name-input');
const formUserAboutInput = popupFormUser.querySelector('#job-input');
const userName = document.querySelector('.user__name');
const userAbout = document.querySelector('.user__about');
const userPic = document.querySelector('.user__pic');
const cardTemplate = document.querySelector('#card').content;
const cardFormPopup = document.querySelector('.popup-form-card');
const titleInputCard = document.querySelector('#text-input');
const linkInputCard = document.querySelector('#url-input');
const cards = document.querySelector('.content');
const popupImage = document.querySelector('.popup-image');
const imageOpen = document.querySelector('.popup__image');
const signImage = document.querySelector('.popup__image-alt');

const initialCards = [
    {
        name: 'Санкт-Петербург',
        link: 'https://images.unsplash.com/photo-1597533849860-5a04a21a7b3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'МОСКВА',
        link: 'https://images.unsplash.com/photo-1613327345946-551b8ecf2afe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
        name: 'Волгоград',
        link: 'https://images.unsplash.com/photo-1583917096279-3eb6e3ea978f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2564&q=80'
    },
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
}

setContent ()

function openAvatarPopup() {
    openPopup(popupFormAvatar);
}

function handleAvatarPopup (evt) { // Функция обработки смены аватара
    console.log("Нажат submit смены аватара");
    evt.preventDefault(); // Не открывать в новом окне (сброс значений по умолчанию)
    userPic.src = avatarLink.value; // Заменить значение src
    closePopup(popupFormAvatar); // Закрыть попап
}
// const ava=document.getElementById('avatar-pic');
// ava.src=ava.src.replace(/images/JCousteau.png, "");

function handleSubmitProfile(evt) { //Функция обработки профиля юзера после submit
    console.log("Нажат submit смены имени юзера");
    evt.preventDefault(); // Не открывать в новом окне
    userName.textContent = formUserNameInput.value; // Присвоить name значение из формы
    userAbout.textContent = formUserAboutInput.value; // Присвоить about значение из формы 
    closePopup(popupFormUser); // Закрыть попап
}

function openProfilePopup() {
    openPopup(popupFormUser);
}

function handleOpenCardPopup (evt) { // Функция обработки создания новой карточки
    console.log("Нажат submit создания новой карточки");
    evt.preventDefault(); // Не открывать в новом окне
    addCard({
        name: titleInputCard.value,
        link: linkInputCard.value
    })
    titleInputCard.value = '';
    linkInputCard.value = '';
    closePopup(cardFormPopup); // Закрыть попап
}

function openCardPopup () {
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

    // document.addEventListener('keydown', (evt) => {
    //     if (evt.key === 'Escape') {
    //         console.log("evt.key");
    //         closePopup(popupFormAvatar);
    //        closePopup(popupFormUser);
    //        closePopup(cardFormPopup);
    //        closePopup(popupImage);
    //     } console.log("Закрыт попап по Escape");
    // })

// Функция закрытия попапа по Escape v2.0

window.addEventListener('keydown', closePopEsc);
function closePopEsc(key) {
    if (key.key === 'Escape') {
        console.log("Escape press!");
        const pup = document.querySelectorAll('.popup');
        pup.forEach(popup => {closePopup(popup);});
    }
}

// Функция закрытия попапа FormAvatar по клику вне попапа

function closeFormAvatar(popup) {
    popup.addEventListener('click', (evt) => {
        if (evt.target === popupFormAvatar) {
            closePopup(popup);
        } 
        else {
            return
        }
    })
}

closeFormAvatar(popupFormAvatar)

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

document.querySelector('.user__overlay').addEventListener("click", openAvatarPopup);
document.querySelector('.card__add-button').addEventListener("click", openCardPopup);
document.querySelector('.user__info-edit-button').addEventListener('click', openProfilePopup);
document
    .querySelectorAll('.popup__button-close')
    .forEach((element) => {
        const popup = element.closest('.popup')
        element.addEventListener('click', () => closePopup(popup))
    });

popupFormAvatar.addEventListener('submit', handleAvatarPopup);
popupFormUser.addEventListener('submit', handleSubmitProfile);
cardFormPopup.addEventListener('submit', handleOpenCardPopup);

//=====================   Валидация. Вариант 1  ========================

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
};

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  // Шаримся по массиву методом some в поисках валидности
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // добавить кнопке класс неактивности
    buttonElement.classList.add('form__submit_inactive');
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove('form__submit_inactive');
  }
};

const setEventListeners = (formElement) => {
  // Находим ВСЕ поля внутри формы, делаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit');
    // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
  toggleButtonState(inputList, buttonElement);

  // Обходм все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // каждому полю добавляем обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызываем isValid, передав ей форму и проверяемый элемент
      isValid(formElement, inputElement);
      // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  // Находим все формы с указанным классом в DOM, делаем из них массив
  const formList = Array.from(document.querySelectorAll('.form'));
  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      // На каждой форме сбросим дефолты
      evt.preventDefault();
    });
    // Для каждой формы вызовем setEventListeners,передав ей элемент формы.
    setEventListeners(formElement);
  });
};
// Вызовем функцию
enableValidation();

//========   Валидация. Вариант 2  ====  Отдельно для аватарки   ======

// const formElement = document.querySelector('.form-avatar');
// const inputElement = formElement.querySelector('.form__input-avatar');
// const fieldsetElement = formElement.querySelector('.form__set-avatar');
// const buttonElement = formElement.querySelector('.button-avatar');
// console.log(formElement, inputElement, fieldsetElement, buttonElement);

// const formError = formElement.querySelector(`.${inputElement.id}-error`);
// console.log(inputElement.id);

// formElement.addEventListener('submit', function (evt) {
//   evt.preventDefault();
// });
// inputElement.addEventListener('input', function (evt) {
//   console.log(evt.target.validity.valid);
// });

// const showInputError = (element) => {
//   element.classList.add('form__input_type_error');
//   formError.classList.add('form__input-error_active');
// };

// const hideInputError = (element) => {
//     element.classList.remove('form__input_type_error');
//     errorElement.classList.remove('form__input-error_active');
// };

// const isValid = () => {
//   if (!inputElement.validity.valid) {
//     showInputError(inputElement);
//   } else {
//     hideInputError(inputElement);
//   }
// };

// formElement.addEventListener('submit', function (evt) {
//   evt.preventDefault();
// });

// inputElement.addEventListener('input', isValid);
