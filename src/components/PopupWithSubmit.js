import { Popup } from './Popup.js';

export class PopupWithSubmit extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
    }

    open({userId, cards}) {
        super.open();
        this._userId = userId;
        this._cards = cards;
    };
    
    setSubmitForm(action) {
        this._handleSubmit = action;
    };

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit({userId: this._userId, cards: this._cards});
        });
    };
};