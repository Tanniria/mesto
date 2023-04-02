export class Card {
    constructor(card, templateSelector, handleCardClick, userID, authorID, handleDeleteCard, handleLikeCard, handleDeleteLikeCard) {
        this._card = card;
        this._name = card.name;
        this._link = card.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._likes = likes;
        this._userID = userID;
        this._authorID = authorID;
        this._handleDeleteCard = handleDeleteCard;
        this._handleLikeCard = handleLikeCard;
        this._handleDeleteLikeCard = handleDeleteLikeCard;
    };

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.feed__item')
            .cloneNode(true);
    
        return cardElement;
    };

    deleteButton() {
        this._card.remove();
        this._card = null;
    };
    _checkDeleteCard() {
        if(this._userID !== this._authorID) {
            this._buttonDelete.remove();
        };
    };

    likeCard() {
        this._buttonLike.classList.add('feed__button-like_active');
    };

    dislikeCard() {
        this._buttonLike.classList.remove('feed__button-like_active');
    };

    setLikesCounter(likes) {
        this._likesCounter.textContent = likes;
    }

    _isCardLiked() {
        return Array.from(this.card.likes).some((aboutLikes) => aboutLikes._id === this._userID);
    };

   toggleLike() {
        return Array.from(this._card.likes).forEach((like) => {
            like._id === this._userID
            ? this.likeCard()
            : this.dislikeCard();
        });
   };
   _handleLikeCard() {
    if (!this._buttonLike.classList.contains('.feed__button-like')) {
        this._handleLikeCard();
    } else {
        this._handleDeleteLikeCard();
        };
   };
    _setEventListeners() {
        this._buttonLike.addEventListener('click', () => this._handleLikeCard());
        this._buttonDelete.addEventListener('click', () => this._handleDeleteCard());
        this._cardImg.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
    };
    
    generateCard() {
        this._card = this._getTemplate();
        this._buttonLike = this._card.querySelector('.feed__button-like');
        this._buttonDelete = this._card.querySelector('.feed__button-delete');
        this._likesCounter = this._card.querySelector('.card__like-counter')
        this._cardImg = this._card.querySelector('.feed__img');
        this._cardTitle = this._card.querySelector('.feed__title');

        this._cardImg.alt = this._name;
        this._cardImg.src = this._link;
        this._cardTitle.textContent = this._name;

        this.setLikesCounter(this._card.likes.length);
        this.toggleLike();
        this._setEventListeners();

        return this._card;
    };
};
