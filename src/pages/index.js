import './index.css';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm} from '../components/PopupWithForm.js';
import { PopupWithSubmit } from '../components/PopupWithSubmit';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api';
import {
  initialCards,
  formValidationConfig,
  buttonOpenEditProfile,
  buttonOpenAddCardPopup,
  buttonOpenEditAvatar,
  formEditProfile,
  formAddCard,
  formEditAvatar,
  nameInput,
  jobInput} from "../utils/constants.js";

const user = new UserInfo({
    userName: '.profile__name',
    userJob: '.profile__job',
    userAvatar: '.profile__avatar',
});

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-62/',
  headers: {
    authorization: 'f71e956f-38a7-4a42-a0a9-eb7efb8f8d45',
    'Content-Type': 'application/json',
  },
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([initialCards, userInfo]) => {
    user.setUserInfo(userInfo);
    user.setUserAvatar(userInfo);
    user.setUserId(userInfo._id);

    cardsContainer.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(err)
  });

function createCard(data) {
  const newCard = new Card({
    data: data,
    userId: user.getUserID(),

    handleCardClick: () => {
      popupImg.open(data);
    },

    handleDeleteCard: () => {
      popupDeleteCard.open(newCard, data._id);
    },

    handleLikeCard: () => {
      api.likeCard(data._id)
        .then((data) => {
          newCard.toggleLike();
          newCard.setLikesCounter(data.likes.length);
          newCard.likeCard();
        })
        .catch((err) => {
          console.log(err);
        })
    },

    handleDeleteLikeCard: () => {
      api.dislike(data._id)
        .then((data) => {
          newCard.toggleLike();
          newCard.setLikesCounter(data.likes.length);
          newCard.dislikeCard();
        })
        .catch((err) => {
          console.log(err);
        })
    }
  })
  return newCard.generateCard();
}

  // function createCard(card, templateSelector, handleCardClick) {
  //   const newCard = new Card(card, templateSelector, handleCardClick);
  //   return newCard.generateCard();
  // };



const cardsContainer = new Section({
  renderer: (item) => {
    cardsContainer.addItem(
      createCard(item, '#feed__template', handleCardClick)
    );
  }, 
}, '.feed__list');
cardsContainer.renderItems(initialCards);

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_edit',
  handleFormSubmit: (data) => {
    popupEditProfile.renderLoading('Сохранение...');
    api.editUserInfo(data)
    .then((result) => {
      user.setUserInfo(result);
      popupEditProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => popupEditProfile.renderLoading('Сохранить'));
  },
});

const popupAddCards = new PopupWithForm({
  popupSelector: '.popup_add',
  handleFormSubmit: (card) => {
    popupAddCards.renderLoading('Создание...');
    api.addCard(card)
    .then((card) => {
      cardsContainer.addItem(
        createCard({ name: card.name, link: card.link }, '#feed__template', handleCardClick)
      );
      popupAddCards.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => popupAddCards.renderLoading('Создать'));
  },
});

const popupEditAvatar = new PopupWithForm({
  popupSelector: '.popup_edit-avatar',
  handleFormSubmit: (data) => {
    popupEditAvatar.renderLoading('Сохранение...');
    api.editAvatar(data)
    .then((result) => {
      user.setUserAvatar(result);
      popupEditAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => popupEditAvatar.renderLoading('Сохранить'));
  }
})

const popupDeleteCard = new PopupWithSubmit({
  popupSelector: '.popup_delete-card',
  handleFormSubmit: (card, id) => {
    popupDeleteCard.renderLoading('Удаление...');
    api.deleteCard(id)
    .then(() => {
      newCard.deleteCard();
      popupDeleteCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => popupDeleteCard.renderLoading('Да'))
  }
});
// function handleCardClick(name, link) {
//   popupImg.open(name, link);
// };

const popupImg = new PopupWithImage('.popup_img');

const editProfileValidation = new FormValidator(formValidationConfig, formEditProfile);
editProfileValidation.enableValidation();

const addCardValidation = new FormValidator(formValidationConfig, formAddCard);
addCardValidation.enableValidation();

const editAvatarValidation = new FormValidator(formValidationConfig, formEditAvatar);
editAvatarValidation.enableValidation();

buttonOpenEditProfile.addEventListener('click', () => {
  popupEditProfile.open();
  const userInfo = user.getUserInfo();
  nameInput.value = userInfo.name;
  jobInput.value = userInfo.job;

  editProfileValidation.resetValidation();
});

buttonOpenAddCardPopup.addEventListener('click', () => {
  popupAddCards.open();

  addCardValidation.resetValidation();
});

buttonOpenEditAvatar.addEventListener('click', () => {
  popupEditAvatar.open();
  const userInfo = user.getUserInfo();
  nameInput.value = userInfo.name;
  jobInput.value = userInfo.job;

  editAvatarValidation.resetValidation();
})

popupEditProfile.setEventListeners();
popupAddCards.setEventListeners();
popupEditAvatar.setEventListeners();
popupDeleteCard.setEventListeners();
popupImg.setEventListeners();