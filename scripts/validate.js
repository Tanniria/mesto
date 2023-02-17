const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};

const showInputError = (formElement, inputElement, errorMessage) => {    
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(formValidationConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(formValidationConfig.errorClass);
};
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(formValidationConfig.inputErrorClass);
  errorElement.classList.remove(formValidationConfig.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  };
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

// const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add(inactiveButtonClass);
//     buttonElement.setAttribute('disabled', true);
//   } else {
//     buttonElement.classList.remove(inactiveButtonClass);
//     buttonElement.removeAttribute('disabled');
//   };
// };
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(formValidationConfig.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(formValidationConfig.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement, formValidationConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(formValidationConfig.inputSelector));
  const buttonElement = formElement.querySelector(formValidationConfig.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, formValidationConfig.inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, formValidationConfig.inputErrorClass, formValidationConfig.errorClass);
      toggleButtonState(inputList, buttonElement, formValidationConfig.inactiveButtonClass);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(formValidationConfig.formSelector));
  formList.forEach((formElement) => {
      setEventListeners(formElement, formValidationConfig);
  });
};

enableValidation(formValidationConfig);