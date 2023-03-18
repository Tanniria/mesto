import './index.css';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm} from '../components/PopupWithForm.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import {initialCards, formValidationConfig, buttonOpenEditProfile, buttonOpenAddCardPopup, formEditProfile, formAddCard, nameInput, jobInput} from "../utils/constants.js";

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

const editProfileValidation = new FormValidator(formValidationConfig, formEditProfile);
editProfileValidation.enableValidation();

const addCardValidation = new FormValidator(formValidationConfig, formAddCard);
addCardValidation.enableValidation();

const popupImg = new PopupWithImage('.popup_img');
popupImg.setEventListeners();

function handleCardClick(name, link) {
  popupImg.open(name, link);
};

const user = new UserInfo({
  userName: '.profile__name',
  userJob: '.profile__job',
});

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_edit',
  handleFormSubmit: (data) => {
    user.setUserInfo(data);
    popupEditProfile.close();
  },
});
popupEditProfile.setEventListeners();

function createCard(card, templateSelector, handleCardClick) {
  const newCard = new Card(card, templateSelector, handleCardClick);
  return newCard.generateCard();
};

const cardsContainer = new Section({
  renderer: (item) => {
    cardsContainer.addItem(
      createCard(item, '#feed__template', handleCardClick)
    );
  }, 
}, '.feed__list');
cardsContainer.renderItems(initialCards);

const popupAddCards = new PopupWithForm({
  popupSelector: '.popup_add',
  handleFormSubmit: (card) => {
    cardsContainer.addItem(
      createCard({ name: card.input_name, link: card.input_link }, '#feed__template', handleCardClick)
    );
    popupAddCards.close();
  },
});
popupAddCards.setEventListeners();