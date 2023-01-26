const buttonEdit = document.querySelector('.profile__button-edit');
const closeButton = document.querySelectorAll('.popup__button-close');
const popupEdit = document.querySelector('.popup_edit');
const formEdit = document.querySelector('.popup__form_edit');
const nameInput = popupEdit.querySelector('.popup__input_value_name');
const jobInput = popupEdit.querySelector('.popup__input_value_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupSave = document.querySelector('.popup__button-save');

const buttonAdd = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popup_add')
const formAdd = document.querySelector('.popup__form_add');
const inputTitle = formAdd.querySelector('.popup__input_value_title');
const inputLink = formAdd.querySelector('.popup__input_value_link');
const feedList = document.querySelector('.feed__list');

const feedTemplate = document.querySelector('.feed__template').content;
const popupImg = document.querySelector('.popup_img');
const imageZoom = popupImg.querySelector('.popup__img-zoom');
const titleZoom = popupImg.querySelector('.popup__img-title');


function popupOpen (popupElement) {
  popupElement.classList.add('popup_opened');
};
function popupClose (popupElement) {
  popupElement.classList.remove('popup_opened');
};

closeButton.forEach((button) => {
  button.addEventListener('click', () => {
    popupClose(button.closest('.popup'))
  });
});

buttonEdit.addEventListener('click', () => {
  popupOpen(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});
function handleFormSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose(popupEdit);
};
formEdit.addEventListener('submit', handleFormSubmitProfile);

buttonAdd.addEventListener('click', () => {
  popupOpen(popupAdd);
});

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const zoomImg = (item) => {
  item.addEventListener('click', (evt) => {
  popupOpen(popupImg);
  titleZoom.textContent = evt.target.closest('.feed__item').textContent;
  imageZoom.src = item.src;
  imageZoom.alt = item.alt;
  });
  };

const newFeed = (name, link) => {
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
  feedList.append(newFeed(item.name, item.link, item.alt));
});

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  feedList.prepend(newFeed(inputTitle.value, inputLink.value));
  evt.target.reset();
  popupClose(popupAdd);
};
formAdd.addEventListener('submit', handleFormSubmitAdd);