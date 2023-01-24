// Edit profile
const buttonEdit = document.querySelector('.profile__button-edit');
const closeButton = document.querySelectorAll('.popup__button-close');
const popupEdit = document.querySelector('.popup__edit');
const formEdit = document.querySelector('.popup__form_edit');
const nameInput = popupEdit.querySelector('.popup__input_value_name');
const jobInput = popupEdit.querySelector('.popup__input_value_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupSave = document.querySelector('.popup__button-save');
// Add button
const buttonAdd = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popup__add')
const formAdd = document.querySelector('.popup__form_add');
const inputTitle = formAdd.querySelector('.popup__input_value_title');
const inputLink = formAdd.querySelector('.popup__input_value_link');
const feedList = document.querySelector('.feed__list');
// Popup image
const feedTemplate = document.querySelector('.feed__template').content;
const popupImg = document.querySelector('.popup__img');
const imageZoom = popupImg.querySelector('.popup__img-zoom');
const titleZoom = popupImg.querySelector('.popup__img-title');

// open & close 
function popupOpen (popupElement) {
  popupElement.classList.add('popup_opened');
};
function popupClose (popupElement) {
  popupElement.classList.remove('popup_opened');
};

// Close popups
closeButton.forEach((button) => {
  button.addEventListener('click', () => {
    popupClose(button.closest('.popup'))
  });
});

// Open Edit
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
}
formEdit.addEventListener('submit', handleFormSubmitProfile);

// Open Add
buttonAdd.addEventListener('click', () => {
  popupOpen(popupAdd);
});

// Карточки
const initialCards = [
  {
    name: 'Москва',
    link: 'https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  },
  {
    name: 'Сочи',
    link: 'https://images.unsplash.com/photo-1589783383891-585baca1e191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    name: 'Нижний Новгород',
    link: 'https://images.unsplash.com/photo-1642318507562-f669802d0f80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  },
  {
    name: 'Санкт-Петербург',
    link: 'https://images.unsplash.com/photo-1554844344-c34ea04258c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
  },
  {
    name: 'Казань',
    link: 'https://images.unsplash.com/photo-1504615458222-979e04d69a27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
  },
  {
    name: 'Владивосток',
    link: 'https://images.unsplash.com/photo-1634545042913-fd935f23b144?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  }
];

const likeEvtListener = (item) => {item.querySelector('.feed__button-like').addEventListener('click', function(evt) {
  evt.target.classList.toggle('feed__button-like_active');
})};

const deleteCardEvtListener = (item) => {item.querySelector('.feed__button-delete').addEventListener('click', function(evt) {
  evt.target.closest('.feed');
})};

const zoomImgEvtListener = (item) => {
  item.addEventListener('click', (evt) => {
  popupOpen(popupImg);
  titleZoom.textContent = evt.target.closest('.feed').textContent;
  imageZoom.src = item.src;
  imageZoom.alt = item.alt;
  });
};

function newFeed(name, link) {
  const feedElement = feedTemplate.cloneNode(true);
  const deleteButton = feedElement.querySelector('.feed__button-delete');
  const feedImg = feedElement.querySelector('.feed__img');
  const feedTitle = feedElement.querySelector('.feed__title');
  const likeButton = feedElement.querySelector('.feed__button-like')

  feedImg.alt = name;
  feedImg.src = link;
  feedTitle.textContent = name;

  likeEvtListener(likeButton);
  deleteCardEvtListener(deleteButton);
  zoomImgEvtListener(feedImg);

  return newFeed;
}

initialCards.forEach((item) => {
  feedList.append(newFeed(item));
});

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  feedList.prepend(newFeed(inputTitle.value, inputLink.value));
  evt.target.reset();
  popupClose(popupAdd);
}

formAdd.addEventListener('submit', handleFormSubmitAdd);