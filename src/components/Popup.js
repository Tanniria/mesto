export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._buttonsClosePopup = this._popup.querySelector('.popup__button-close');
    }
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._closeByEscape);
    }
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closeByEscape);
    }
    _closeByEscape(evt) {
        if (evt.key === 'Escape') {
            this.close();
        };
    };

    _closeByOverlay(evt) {
        if (evt.target === this._popup) {
            this.close();
        };
    };

    setEventListeners() {
        this._popup.addEventListener('mousedown', this._closeByOverlay);
        this._buttonsClosePopup.addEventListener('click', () => this.close());
    };
};