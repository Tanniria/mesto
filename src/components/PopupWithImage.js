import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImg = this._popup.querySelector('.popup__img-zoom');
        this._cardTitle = this._popup.querySelector('.popup__img-title');
    }
    open(name, link) {
        super.open();
        this._popupImg.src = link;
        this._popupImg.alt = name;
        this._cardTitle.textContent = name;
    };
};