const formValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_disabled',
    inputErrorClass: 'popup__iput_type_error',
    errorClass: 'popup__input-error_active',
};

// function disableSabmit(evt) {
//     evt.preventDefault();
// };

// function enableValition(formValidationConfig) {
//     const formList = Array.from(document.querySelectorAll(formValidationConfig.formSelector));
//     formList.forEach((form) => {
//         const buttonSaveCardForm = form.querySelector(formValidationConfig.submitButtonSelector);
//         form.addEventListener('submit', disableSabmit);
//         form.addEventListener('input', (evt) => {
//             hadleFormInput(evt, formValidationConfig);
//             toggleButton(form, formValidationConfig, buttonSaveCardForm);
//         });
//         toggleButton(form, formValidationConfig, buttonSaveCardForm);
//     });
// };

// const showInputError = (input, formValidationConfig) => {
//     const inputId = input.id;
//     const errorInput = document.querySelector(`#${inputId}-error`);
//     input.classList.add(formValidationConfig.errorClass)
//     errorInput.classList.add(formValidationConfig.inputErrorClass);
//     errorInput.textContent = input.validationMessage;
// };

// const hideInputError = (input, formValidationConfig) => {
//     const inputId = input.id;
//     const errorInput = document.querySelector(`#${inputId}-error`);
//     input.classList.remove(formValidationConfig.errorClass)
//     errorInput.classList.remove(formValidationConfig.inputErrorClass);
//     errorInput.textContent = '';

// };

// function hadleFormInput(evt, formValidationConfig) {
//     const input = evt.target;

//     if (input.validity.valid) {
//         hideInputError(input, formValidationConfig);
//     } else {
//         showInputError(input, formValidationConfig);
//     };
// };


// function toggleButton(form, formValidationConfig, buttonSaveCardForm) {
    
//     const isFormValid = form.checkValidity();
    
//     buttonSaveCardForm.disabled = !isFormValid;
//     buttonSaveCardForm.classList.toggle(formValidationConfig.inactiveButtonClass, !isFormValid);

// };
// enableValition(formValidationConfig);



// 2 решение

const showInputError = (formElement, inputElement, inputErrorClass, errorClass, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
    
    inputElement.classList.add(inputErrorClass);
    errorElement.classList.add(errorClass);
    errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`${inputElement.name}-error`);

    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
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

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.setAttribute('disabled', '');
    } else {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.removeAttribute('disabled', '');
    };
};

const setEventListeners = (formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    
    toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

const enableValidation = ({formSelector, ...restformValidationConfig}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement, restformValidationConfig);
    });
};

enableValidation(formValidationConfig);