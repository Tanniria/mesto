import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import {initialCards, formValidationConfig} from "./constants.js";

// Попап - редактирование профиля
const buttonOpenEditProfile = document.querySelector('.profile__button-edit');
const popupEditProfile = document.querySelector('.popup_edit');
const formEditProfile = document.querySelector('.popup__form_edit');
const nameInput = popupEditProfile.querySelector('.popup__input_value_name');
const jobInput = popupEditProfile.querySelector('.popup__input_value_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const buttonsClosePopup = document.querySelectorAll('.popup__button-close');
const buttonSave = document.querySelector('.popup__button-save');
// Попап - добавление новой карточки
const buttonOpenAddCardPopup = document.querySelector('.profile__button-add');
const popupAddCard = document.querySelector('.popup_add');
const formAddCard = document.querySelector('.popup__form_add');
const titleInput = formAddCard.querySelector('.popup__input_value_title');
const linkInput = formAddCard.querySelector('.popup__input_value_link');
const feedList = document.querySelector('.feed__list');
// Попап - увеличение картинки
const popupImg = document.querySelector('.popup_img');
const imageZoom = popupImg.querySelector('.popup__img-zoom');
const titleZoom = popupImg.querySelector('.popup__img-title');

function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
  document.addEventListener('mousedown', closeByOverlay);
};

function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
  document.removeEventListener('mousedown', closeByOverlay);
};

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

function closeByOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  };
};

buttonsClosePopup.forEach((button) => {
  button.addEventListener('click', () => {
    closePopup(button.closest('.popup'))
  });
});

function submitEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
};
formEditProfile.addEventListener('submit', submitEditProfile);

const EditProfileValidation = new FormValidator(formValidationConfig, formEditProfile);
EditProfileValidation.enableValidation();

const AddCardValidation = new FormValidator(formValidationConfig, formAddCard);
AddCardValidation.enableValidation();

buttonOpenEditProfile.addEventListener('click', () => {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  EditProfileValidation.resetValidation();
});

buttonOpenAddCardPopup.addEventListener('click', () => {
  openPopup(popupAddCard);
  AddCardValidation.resetValidation();
});

function ZoomImg(name, link) {
  imageZoom.src = link;
  imageZoom.alt = name;
  titleZoom.textContent = name;
  openPopup(popupImg);
};

function createCard(name, link, handleCardClick) {
  const newCard = new Card({name, link}, '#feed__template', handleCardClick);
  return newCard.generateCard();
};

function renderCard(name, link, handleCardClick) {
  feedList.prepend(createCard(name, link, handleCardClick));
};

initialCards.forEach(card => renderCard(card.name, card.link, ZoomImg));

function submitAddCardForm(evt) {
  evt.preventDefault();
  renderCard(titleInput.value, linkInput.value, ZoomImg);
  evt.target.reset();
  closePopup(popupAddCard);
};
formAddCard.addEventListener('submit', submitAddCardForm);