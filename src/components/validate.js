export const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

export const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.textContent = "";
  errorElement.classList.remove("form__input-error_active");
};

export const checkInputValidity = (formElement, inputElement) => {
  if (!formElement.validity.valid) {
    showInputError(formElement, inputElement, errorMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

export const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

export const hasInvalidInput = (inputList) => {
  // Шаримся по массиву методом some в поисках валидности
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    return !inputElement.validity.valid;
  });
};

export const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  const isInputValid = hasInvalidInput(inputList);
  if (isInputValid) {
    buttonElement.classList.add("form__submit_inactive");
    // console.log('Кнопка submit НЕ АКТИВНА', buttonElement, inputList);
  } else {
    buttonElement.classList.remove("form__submit_inactive");
    // console.log('Кнопка submit активна', buttonElement, inputList);
  }
};

export const setEventListeners = (formElement) => {
  // Находим ВСЕ поля внутри формы, делаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  const buttonElement = formElement.querySelector(".form__submit");
  // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
  toggleButtonState(inputList, buttonElement);
  // Обходм все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // каждому полю добавляем обработчик события input
    inputElement.addEventListener("input", () => {
      // Внутри колбэка вызываем isValid, передав ей форму и проверяемый элемент
      isValid(formElement, inputElement);
      // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(inputList, buttonElement);
    });
  });
};

//Функция очистки спанов после клика на кнопку
export const clearErrorMessage = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.forEach((mistake) =>
    mistake.classList.remove("form__input-error_active")
  );
};

export const enableValidation = () => {
  // Находим все формы с указанным классом в DOM, делаем из них массив
  const formList = Array.from(document.querySelectorAll(".form"));
  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      // На каждой форме сбросим дефолты
      evt.preventDefault();
    });
    // Для каждой формы вызовем setEventListeners,передав ей элемент формы.
    setEventListeners(formElement);
  });
};
