import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._buttonSave = this._popupForm.querySelector('.popup__button-save');
        this._buttonSaveText = this._buttonSave.textContent;
        this._inputList = Array.from(this._popupForm.querySelectorAll('.popup__input'));
    };

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    };

    loadingData(isLoading, textLoading = 'Сохранение...') {
        if(isLoading) {
            this._buttonSave.textContent = textLoading;
        } else {
            this._buttonSave.textContent = this._buttonSaveText;
        };
    };
    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
        
    };

    close() {
        super.close();
        this._popupForm.reset();
    };
};