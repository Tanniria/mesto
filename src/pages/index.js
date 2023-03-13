import './index.css';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm} from '../components/PopupWithForm.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import {initialCards, formValidationConfig} from "../utils/constants.js";

const userInfo = new UserInfo({
  userName: '.profile__name',
  userJob: '.profile__job',
});

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_edit',
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
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

const popupImg = new PopupWithImage('.popup_img');
popupImg.setEventListeners();

function handleCardClick(name, link) {
  popupImg.open(name, link);
};

const popupAddCards = new PopupWithForm({
  popupSelector: '.popup_add',
  handleFormSubmit: (item) => {
    cardsContainer.addItem(createCard(
      {name: item.input_name, link: item.input_link},
      '#feed__template',
      handleCardClick
    ));
    popupAddCards.close();
  },
});
popupAddCards.setEventListeners();

const editProfileValidation = new FormValidator(formValidationConfig, 'popup__form_edit');
editProfileValidation.enableValidation();

const addCardValidation = new FormValidator(formValidationConfig, 'popup__form_add');
addCardValidation.enableValidation();


const buttonOpenEditProfile = document.querySelector('.profile__button-edit');
const buttonOpenAddCardPopup = document.querySelector('.profile__button-add');

buttonOpenEditProfile.addEventListener('click', () => {
  popupEditProfile.open();
  const UserInfo = user.getUserInfo();
  popupEditProfile.setInputValues(userInfo);

  editProfileValidation.resetValidation();
});

buttonOpenAddCardPopup.addEventListener('click', () => {
  popupAddCards.open();
  addCardValidation.resetValidation();
});



// const buttonOpenEditProfile = document.querySelector('.profile__button-edit');
// const popupEditProfile = document.querySelector('.popup_edit');
// const formEditProfile = document.querySelector('.popup__form_edit');
// const nameInput = popupEditProfile.querySelector('.popup__input_value_name');
// const jobInput = popupEditProfile.querySelector('.popup__input_value_job');
// const profileName = document.querySelector('.profile__name');
// const profileJob = document.querySelector('.profile__job');
// const buttonsClosePopup = document.querySelectorAll('.popup__button-close');  //перенесла в попап
// const buttonSave = document.querySelector('.popup__button-save');

// const buttonOpenAddCardPopup = document.querySelector('.profile__button-add');
// const popupAddCard = document.querySelector('.popup_add');
// const formAddCard = document.querySelector('.popup__form_add');
// const titleInput = formAddCard.querySelector('.popup__input_value_title');
// const linkInput = formAddCard.querySelector('.popup__input_value_link');
// const feedList = document.querySelector('.feed__list');

// const popupImg = document.querySelector('.popup_img');
// const imageZoom = popupImg.querySelector('.popup__img-zoom'); // перенесла в поапвизимедж
// const titleZoom = popupImg.querySelector('.popup__img-title');

// Перенесла в попап

// function openPopup (popupElement) {
//   popupElement.classList.add('popup_opened');
//   document.addEventListener('keydown', closeByEscape);
//   document.addEventListener('mousedown', closeByOverlay);
// };

// function closePopup (popupElement) {
//   popupElement.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closeByEscape);
//   document.removeEventListener('mousedown', closeByOverlay);
// };

// function closeByEscape(evt) {
//   if (evt.key === 'Escape') {
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopup(openedPopup);
//   };
// };

// function closeByOverlay(evt) {
//   if (evt.target.classList.contains('popup_opened')) {
//     closePopup(evt.target);
//   };
// };
// // до сюда

// buttonsClosePopup.forEach((button) => {
//   button.addEventListener('click', () => {
//     closePopup(button.closest('.popup'))
//   });
// });

// function submitEditProfile(evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileJob.textContent = jobInput.value;
//   closePopup(popupEditProfile);
// };
// formEditProfile.addEventListener('submit', submitEditProfile);

// const editProfileValidation = new FormValidator(formValidationConfig, formEditProfile);
// editProfileValidation.enableValidation();

// const addCardValidation = new FormValidator(formValidationConfig, formAddCard);
// addCardValidation.enableValidation();

// buttonOpenEditProfile.addEventListener('click', () => {
//   openPopup(popupEditProfile);
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileJob.textContent;
//   editProfileValidation.resetValidation();
// });

// buttonOpenAddCardPopup.addEventListener('click', () => {
//   openPopup(popupAddCard);
//   addCardValidation.resetValidation();
// });

// function ZoomImg(name, link) {
//   imageZoom.src = link;
//   imageZoom.alt = name;
//   titleZoom.textContent = name;
//   openPopup(popupImg);
// };

// function createCard(name, link, handleCardClick) {
//   const newCard = new Card({name, link}, '#feed__template', handleCardClick);
//   return newCard.generateCard();
// };

// function renderCard(name, link, handleCardClick) {
//   feedList.prepend(createCard(name, link, handleCardClick));
// };

// initialCards.forEach(card => renderCard(card.name, card.link, ZoomImg));

// function submitAddCardForm(evt) {
//   evt.preventDefault();
//   renderCard(titleInput.value, linkInput.value, ZoomImg);
//   evt.target.reset();
//   closePopup(popupAddCard);
// };
// formAddCard.addEventListener('submit', submitAddCardForm);