export class Card {
    constructor(card, templateSelector, handleCardClick) {
        this._name = card.name;
        this._link = card.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;

        this._card = this._getTemplate();
        this._buttonLike = this._card.querySelector('.feed__button-like');
        this._buttonDelete = this._card.querySelector('.feed__button-delete');
        this._cardImg = this._card.querySelector('.feed__img');
        this._cardTitle = this._card.querySelector('.feed__title');
    };

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.feed__item')
            .cloneNode(true);
    
        return cardElement;
    };

    generateCard() {
        this._cardImg.alt = this._name;
        this._cardImg.src = this._link;
        this._cardTitle.textContent = this._name;

        this._setEventListeners();

        return this._card;
    };

    _likeButton(buttonLike) {
        buttonLike.target.classList.toggle('feed__button-like_active');
    };
    _deleteButton() {
        this._card.remove();
        this._card = null;
    }

    _setEventListeners() {
        this._buttonLike.addEventListener('click', this._likeButton);
        this._buttonDelete.addEventListener('click', this._deleteButton);
        this._cardImg.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
    };
};