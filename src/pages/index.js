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
  jobInput
} from "../utils/constants.js";

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
    Authorization: 'f71e956f-38a7-4a42-a0a9-eb7efb8f8d45',
    'Content-Type': 'application/json'
  }
});

const useDataFromServer = [api.getUserInfo(), api.getInitialCards()];
let myId;

Promise.all(useDataFromServer)
  .then(([data, cards]) => {
    myId = data._id;
    user.setUserInfo(data);
    user.setUserAvatar(data);
    cardsContainer.renderItems(cards);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`)
  });

const user = new UserInfo({
  profileName: '.profile__name',
  profileJob: '.profile__job',
  profileAvatar: '.profile__avatar',
});

const createCard = (data) => {
  const newCard = new Card({
    data: data,
    myId: myId,
    templateSelector: '#feed__template',
    handleCardClick,
    handleDeleteCard: (userId, cards) => {
      popupDeleteCard.open(userId, cards);
      popupDeleteCard.setSubmitForm((data) => {
        api.deleteCard(data.userId)
        .then(() => {
          popupDeleteCard.close();
          newCard.deleteCard()
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`)
        });
      });
    },
    handleLikeCard: (data) => {
      if(!newCard.isLiked()) {
        api.likeCard(data.userId)
        .then((data) => {
          newCard.getlikesData(data);
          newCard.handleLikeCard();
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`)
        });
      } else {
        api.dislike(data.userId)
        .then((data) => {
          newCard.getlikesData(data);
          newCard.handleLikeCard();
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`)
        });
      }
    },
  });
  return newCard.generateCard(data);
}

const popupAddCards = new PopupWithForm({
  popupSelector: '.popup_add',
  handleFormSubmit: (data) => {
    popupAddCards.loading(true);
    api.addCard({
      name: data.name,
      link: data.link,
    })
    .then((res) => {
      cardsContainer.addItem(createCard(res), true);
      popupAddCards.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      popupAddCards.loading(false);
    })
  }
});

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_edit',
  handleFormSubmit: (data) => {
    popupEditProfile.loading(true);
    api.editUserInfo(data)
    .then((res) => {
      user.setUserInfo(res);
      popupEditProfile.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      popupEditProfile.loading(false);
    })
  }
});

const popupEditAvatar = new PopupWithForm({
  popupSelector: '.popup_edit-avatar',
  handleFormSubmit: (data) => {
    popupEditAvatar.loading(true);
    api.editAvatar(data)
    .then((res) => {
      user.setUserAvatar(res);
      popupEditAvatar.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      popupEditAvatar.loading(false);
    });
  }
});

const cardsContainer = new Section({
  renderer: createCard
}, '.feed__list');

function handleCardClick(name, link) {
  popupImg.open(name, link);
};
const popupImg = new PopupWithImage('.popup_img');

const popupDeleteCard = new PopupWithSubmit({
  popupSelector: '.popup_delete-card',
  handleFormSubmit: (newCard, userId) => {
    popupDeleteCard.loading(true);
    api.deleteCard(userId)
      .then((res) => {
        newCard.deleteCard();
        popupDeleteCard.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
      })
      .finally(() => {
        popupDeleteCard.loading(false);
      })
  }
})

const editProfileValidation = new FormValidator(formValidationConfig, formEditProfile);
editProfileValidation.enableValidation();

const addCardValidation = new FormValidator(formValidationConfig, formAddCard);
addCardValidation.enableValidation();

const editAvatarValidation = new FormValidator(formValidationConfig, formEditAvatar);
editAvatarValidation.enableValidation();

buttonOpenEditProfile.addEventListener('click', () => {
  popupEditProfile.open();
  // popupEditProfile.setInputValues(user.getUserInfo());
  const userInfo = user.getUserInfo(); 
  nameInput.value = userInfo.name; 
  jobInput.value = userInfo.job; 
  editProfileValidation.resetValidation();
})

buttonOpenAddCardPopup.addEventListener('click', () => {
  popupAddCards.open();
  addCardValidation.resetValidation();
});

buttonOpenEditAvatar.addEventListener('click', () => {
  popupEditAvatar.open();
  editAvatarValidation.resetValidation();
});

popupEditProfile.setEventListeners();
popupAddCards.setEventListeners();
popupEditAvatar.setEventListeners();
popupDeleteCard.setEventListeners();
popupImg.setEventListeners();