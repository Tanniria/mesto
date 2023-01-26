const buttonOpenEditProfile = document.querySelector('.profile__button-edit');
const popupEditProfile = document.querySelector('.popup_edit');
const formEditProfile = document.querySelector('.popup__form_edit');
const nameInput = popupEditProfile.querySelector('.popup__input_value_name');
const jobInput = popupEditProfile.querySelector('.popup__input_value_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const buttonsClosePopup = document.querySelectorAll('.popup__button-close');
const buttonSave = document.querySelector('.popup__button-save');

const buttonOpenAddCardPopup = document.querySelector('.profile__button-add');
const popupAddCard = document.querySelector('.popup_add')
const formAddCard = document.querySelector('.popup__form_add');
const titleInput = formAddCard.querySelector('.popup__input_value_title');
const linkInput = formAddCard.querySelector('.popup__input_value_link');
const feedList = document.querySelector('.feed__list');

const feedTemplate = document.querySelector('.feed__template').content;
const popupImg = document.querySelector('.popup_img');
const imageZoom = popupImg.querySelector('.popup__img-zoom');
const titleZoom = popupImg.querySelector('.popup__img-title');

function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
};
function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');
};

buttonsClosePopup.forEach((button) => {
  button.addEventListener('click', () => {
    closePopup(button.closest('.popup'))
  });
});

buttonOpenEditProfile.addEventListener('click', () => {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});
function submitEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
};
formEditProfile.addEventListener('submit', submitEditProfile);

buttonOpenAddCardPopup.addEventListener('click', () => {
  openPopup(popupAddCard);
});

const zoomImg = (item) => {
  item.addEventListener('click', (evt) => {
    openPopup(popupImg);
    titleZoom.textContent = evt.target.closest('.feed__item').textContent;
    imageZoom.src = item.src;
    imageZoom.alt = item.alt;
  });
};

const createCard = (name, link) => {
  const feedElement = feedTemplate.cloneNode(true);
  const feedImg = feedElement.querySelector('.feed__img');
  const feedTitle = feedElement.querySelector('.feed__title');

  feedImg.alt = name;
  feedImg.src = link;
  feedTitle.textContent = name;

  const likeButton = feedElement.querySelector('.feed__button-like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('feed__button-like_active');
  });
  const deleteButton = feedElement.querySelector('.feed__button-delete').addEventListener('click', function(evt) {
    const feedItem = evt.target.closest('.feed__item');
    feedItem.remove();
  });

  zoomImg(feedImg);

  return feedElement;
};

initialCards.forEach((item) => {
  feedList.append(createCard(item.name, item.link, item.alt));
});

function submitAddCardForm(evt) {
  evt.preventDefault();
  feedList.prepend(createCard(titleInput.value, linkInput.value));
  evt.target.reset();
  closePopup(popupAddCard);
};
formAddCard.addEventListener('submit', submitAddCardForm);