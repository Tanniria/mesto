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
  jobInput,
  inputAvatar,
  userAvatar
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
    userName: '.profile__name',
    userJob: '.profile__job',
    userAvatar: '.profile__avatar',
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
        api.ikeCard(data.userId)
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

const popupDeleteCard = new PopupWithSubmit('.popup_delete-card');

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

const editProfileValidation = new FormValidator(formValidationConfig, formEditProfile);
editProfileValidation.enableValidation();

const addCardValidation = new FormValidator(formValidationConfig, formAddCard);
addCardValidation.enableValidation();

const editAvatarValidation = new FormValidator(formValidationConfig, formEditAvatar);
editAvatarValidation.enableValidation();

buttonOpenEditProfile.addEventListener('click', () => {
  popupEditProfile.open();
  popupEditProfile.setInputValues(user.getUserInfo());
  formEditProfile.resetValidation();
})

buttonOpenAddCardPopup.addEventListener('click', () => {
  popupAddCards.open();
  formAddCard.resetValidation();
});

buttonOpenEditAvatar.addEventListener('click', () => {
  popupEditAvatar.open();
  formEditAvatar.resetValidation();
});

popupEditProfile.setEventListeners();
popupAddCards.setEventListeners();
popupEditAvatar.setEventListeners();
popupDeleteCard.setEventListeners();
popupImg.setEventListeners();

// function editProfile() {
//   popupEditProfile.open();
//   const userInfo = user.getUserInfo();
//   nameInput.value = userInfo.name;
//   jobInput.value = userInfo.job;

//   editProfileValidation.resetValidation();
// }

// function addCardPopup() {
//   popupAddCards.open();
  
//   addCardValidation.resetValidation();
// }

// function editAvatar() {
//   popupEditAvatar.open();
//   const userInfo = user.getUserInfo();
//   inputAvatar.value = userInfo.avatar;
//   editAvatarValidation.resetValidation();
// }

// buttonOpenEditProfile.addEventListener('click', editProfile);
// buttonOpenAddCardPopup.addEventListener('click', addCardPopup);
// buttonOpenEditAvatar.addEventListener('click', editAvatar);



// const popupEditProfile = new PopupWithForm({
//   popupSelector: '.popup_edit',
//   handleFormSubmit: (data) => {
//     popupEditProfile.renderLoading('Сохранение...');
//     api.editUserInfo(data)
//     .then((result) => {
//       user.setUserInfo(result);
//       popupEditProfile.close();
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => popupEditProfile.renderLoading('Сохранить'));
//   },
// });

// const popupAddCards = new PopupWithForm({
//   popupSelector: '.popup_add',
//   handleFormSubmit: (card) => {
//     popupAddCards.renderLoading('Создание...');
//     api.addCard(card)
//     .then((card) => {
//       cardsContainer.addItem(
//         createCard({ name: card.name, link: card.link }, '#feed__template', handleCardClick)
//       );
//       popupAddCards.close();
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => popupAddCards.renderLoading('Создать'));
//   },
// });

// const popupEditAvatar = new PopupWithForm({
//   popupSelector: '.popup_edit-avatar',
//   handleFormSubmit: (data) => {
//     popupEditAvatar.renderLoading('Сохранение...');
//     api.editAvatar(data)
//     .then((data) => {
//       user.setUserInfo(data);
//       popupEditAvatar.close();
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => popupEditAvatar.renderLoading('Сохранить'));
//   }
// })

// const popupDeleteCard = new PopupWithSubmit({
//   popupSelector: '.popup_delete-card',
//   handleFormSubmit: (card, id) => {
//     popupDeleteCard.renderLoading('Удаление...');
//     api.deleteCard(id)
//     .then(() => {
//       newCard.deleteCard();
//       popupDeleteCard.close();
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => popupDeleteCard.renderLoading('Да'))
//   }
// });





// const cardsContainer = new Section({
//   renderer: (item) => {
//     cardsContainer.addItem(
//       createCard(item, '#feed__template', handleCardClick)
//     );
//   }, 
// }, '.feed__list');
// cardsContainer.renderItems(initialCards);

// const handleLikeCard = (userId, clickLike, setLikesCounter) => {
//   api.likeCard(userId)
//     .then((res) => {
//       clickLike();
//       setLikesCounter(res.likes.length);
//     })
//     .catch((err) => {
//       console.log(`Ошибка: ${err}`)
//     });
// }

// const handleDeleteLikeCard = (userId, clickLike, setLikesCounter) => {
//   api.dislike(userId)
//     .then((res) => {
//       clickLike();
//       setLikesCounter(res.likes.length);
//     })
//     .catch((err) => {
//       console.log(`Ошибка: ${err}`)
//     });
// }

// const handleDeleteCard = (userId, deleteCard) => {
//   api.deleteCard(userId)
//     .then((res) => {
//       deleteCard();
//       popupDeleteCard.close()
//     })
//     .catch((err) => {
//       console.log(`Ошибка: ${err}`)
//     });
// }

// function createCard(data) {
//   const newCard = new Card({
//     data: data,
//     myId: user.getUserID(),

//     handleCardClick: () => {
//       popupImg.open(data);
//     },

//     handleDeleteCard: () => {
//       popupDeleteCard.open();
//       popupDeleteCard.setSubmitForm(() => {
//         api.deleteCard(newCard.getIdCard())
//         .then(() => {
//           newCard.deleteCard();
//           popupDeleteCard.close();
//         })
//         .catch((err) => {
//           console.log(err);
//         })
//       })
//     },

//     handleLikeCard: () => {
//       api.likeCard(newCard.getIdCard())
//         .then((data) => {
//           // newCard.toggleLike();
//           // newCard.setLikesCounter(data.likes.length);
//           // newCard.likeCard();
//           newCard.handleLikeCard(data);
//         })
//         .catch((err) => {
//           console.log(err);
//         })
//     },

//     handleDeleteLikeCard: () => {
//       api.dislike(newCard.getIdCard())
//         .then((data) => {
//           // newCard.toggleLike();
//           // newCard.setLikesCounter(data.likes.length);
//           // newCard.dislikeCard();
//           newCard.handleLikeCard(data);
//         })
//         .catch((err) => {
//           console.log(err);
//         })
//     }
//   })
//   return newCard.generateCard();
// }



