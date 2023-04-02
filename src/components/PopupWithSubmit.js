import { Popup } from './Popup.js';

export class PopupWithSubmit extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
    }
    open(card, id) {
        super.open();
        this._id = id;
        this._card = card;
    };
    
    setEventListeners() {
        super.setEventListeners();
        this._buttonSubmit.addEventListener('click', () => {
            this._handleFormSubmit(this._card, this._id);
        });
    };
};