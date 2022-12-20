let popup = document.querySelector(".popup");
let popupForm = document.querySelector('.popup__form');
const popupOpen = document.querySelector('.profile__button-edit');
const popupClose = document.querySelector('.popup__button-close');
let nameInput = popup.querySelector('.popup__input_value_name');
let jobInput = popup.querySelector('.popup__input_value_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

function openForm () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add('popup_opened');
}
popupOpen.addEventListener('click', openForm);

function closeForm () {
  popup.classList.remove('popup_opened');
}
popupClose.addEventListener('click', closeForm);

function handleFormSubmit (evt) {
  evt.preventDefault();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  closeForm();
}
popupForm.addEventListener('submit', handleFormSubmit);