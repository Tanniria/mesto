export class Card {
    constructor({data, templateSelector, handleCardClick, myId, handleDeleteCard, handleLikeCard, handleDeleteLikeCard})
    {
        this._card = data;
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._userId = data._id;
        this._ownerId = data.owner._id;
        this._myId = myId;
        this._likes = data.likes;
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
    generateCard() {
        this._card = this._getTemplate();

        this._buttonLike = this._card.querySelector('.feed__button-like');
        this._buttonDelete = this._card.querySelector('.feed__button-delete');
        this._likesCounter = this._card.querySelector('.card__like-counter')
        this._cardImg = this._card.querySelector('.feed__img');
        this._cardTitle = this._card.querySelector('.feed__title');
        this._likesCounter.textContent = this._likes.length;
        this._cardImg.alt = this._name;
        this._cardImg.src = this._link;
        this._cardTitle.textContent = this._name;

        

        this._likeCard();
        this._checkDeleteCard();
        this._setEventListeners();
        
        return this._card;
    };

    deleteCard() {
        this._card.remove();
        this._card = null;
    };

    _checkDeleteCard() {
        if(this._ownerId !== this._myId) {
            this._buttonDelete.remove();
        }
    }
    
    isLiked() {
        return this._likes.some((item) => item._id === this._myId);
    }

    _likeCard() {
        if(this._isLiked()) {
            this._buttonLike.classList.add('feed__button-like_active');
        }
    };

    getlikesData(data) {
        this._likes = data.likes;
    }

    _handleLikeCard() {
        this._likesCounter.textContent = this._likes.length;
        if(this._isLiked()) {
            this._buttonLike.classList.add('feed__button-like_active');
        } else {
            this._buttonLike.classList.remove('feed__button-like_active');
        }
    }

    _setEventListeners() {
        this._cardImg.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link);
        });
        this._buttonDelete.addEventListener('click', () => {
            this._handleDeleteCard({ userId: this._userId })
        });
        this._buttonLike.addEventListener('click', () => {
            this._handleLikeCard({ userId: this._userId });
        });
    };

    // _setEventListeners() {
    //     this._buttonLike.addEventListener('click', (evt) => {
    //         if (evt.target.classList.contains('feed__button-like_active')) { 
    //             this._handleDeleteLikeCard(this._userId, this._clickLike, this._setLikesCounter)
    //         } else {
    //         this.handleLikeCard(this._userId, this._clickLike, this._setLikesCounter)
    //         }
    //     });
    //     this._buttonDelete.addEventListener('click', () => {
    //         this._handleDeleteCard(this._deleteCard, this.__userId)
    //     });
    //     this._cardImg.addEventListener('click', () => {
    //         this._handleCardClick(this._name, this._link);
    //     });
    // };

    // _setLikesCounter = (num) => this._likesCounter.textContent = num;
    // _clickLike = () => this._buttonLike.toggle('feed__button-like_active');
    // _deleteCard = () => this._card.remove();


    // likeCard() {
    //     this._buttonLike.classList.add('feed__button-like_active');
    // };

    // dislikeCard() {
    //     this._buttonLike.classList.remove('feed__button-like_active');
    // };
    // _hasUserLike() {
    //     return Array.from(this._card.likes).some((likeInfo) => likeInfo._id === this._myId);
    // }
    // setLikesCounter(likesCounter) {
    //     this._likesCounter.textContent = likesCounter;
    // }
    // 
    // _handleLikeCard() {
    //     if (!this._buttonLike.classList.contains('.feed__button-like')) {
    //         this._handleLikeCard(this._id);
    //     } else {
    //         this._handleDeleteLikeCard(this._id);
    //         };
    //    };

 
 
    // _setEventListeners() {
    //     this._buttonLike.addEventListener('click', () => this._handleLikeCard());
    //     this._buttonDelete.addEventListener('click', () => this._handleDeleteCard());
    //     this._cardImg.addEventListener('click', () => {
    //         this._handleCardClick(this._name, this._link);
    //     });
    // };

};
    // getIdCard() {
    //     return this._id;
    // };
    // handleLikeCard(data) {
    //     this._likes = data.likes;
    //     this.buttonLike.classList.toggle('feed__button-like_active')
    // }

    // checkLikeCard() {
    //     if (!this._buttonLike.classList.contains('.feed__button-like')) {
    //         this._handleLikeCard(this._id);
    //     } else {
    //         this._handleDeleteLikeCard(this._id);
    //         };
    // }

    

   

    // _isCardLiked() {
    //     if(this._likes.some((user) => {
    //         return this._myId === user._id;
    //     })
    //     ) {
    //         this._buttonLike.classList.add('feed__button-like_active');
    //     }
    // }
  

   

    // _isCardLiked() {
    //     return Array.from(this.card.likes).some((aboutLikes) => aboutLikes._id === this._userID);
    // };

//    toggleLike() {
//         return Array.from(this._card.likes).forEach((like) => {
//             like._id === this._myId
//             ? this.likeCard()
//             : this.dislikeCard();
//         });
//    };

