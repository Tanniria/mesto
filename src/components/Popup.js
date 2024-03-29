export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._buttonsClosePopup = this._popup.querySelector('.popup__button-close');
        this._closeByEscape = this._closeByEscape.bind(this);
        this._buttonSubmit = this._popup.querySelector('.popup__button-save');
        this._popupForm = this._popup.querySelector('.popup__form');
    };

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._closeByEscape);
    };

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closeByEscape);
    };

    _closeByEscape(evt) {
        if (evt.key === 'Escape') {
            this.close();
        };
    };

    setEventListeners() {
        this._buttonsClosePopup.addEventListener('click', () => this.close());
        this._popup.addEventListener('click', (evt) => {
            if(evt.target.classList.contains('popup_opened')) {
                this.close();
            };
        });
    };
};