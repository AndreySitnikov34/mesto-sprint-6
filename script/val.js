const toggleButtonState = (inputList, buttonElement) => {
    console.log("248",inputList, buttonElement);
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('button_inactive');
  } else {
      console.log("252", inputList, buttonElement);
    buttonElement.classList.remove('button_inactive');
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
  }) 
}; 

const showInputError = (formElement, inputElement, errorMessage) => { 
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); // Находим элемент ошибки внутри самой функции
//   const errorElement = formElement.querySelector(`.form__input-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); //Находим элемент ошибки
//   const errorElement = formElement.querySelector(`.form__input-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => { // Функция принимает formElement и inputElement 
    // а не берёт их из внешней области видимости
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage); // Получает параметром
    // форму , в которой находится проверяемое поли е само это поле ввода
  } else {
    hideInputError(formElement, inputElement); // Или это получает параметром форму, в которой находится проверяемое
    // и само это поле ввода
  }
};

const setEventListeners = (formElement) => {
    console.log("293", formElement);
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.form__submit');
// console.log("296", formElement, buttonElement);
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
//  console.log("299", inputElement, buttonElement);    
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
    fieldsetList.forEach((fieldSet) => {
        // console.log("313", fieldSet);
      setEventListeners(fieldSet);
    });
  });
};

enableValidation();