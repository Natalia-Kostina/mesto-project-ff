import '../styles/index.css';
import addIcon from '../images/add-icon.svg';
import deleteIcon from '../images/delete-icon.svg';
import likeActive from '../images/like-active.svg';
import close from '../images/close.svg';
import editIcon from '../images/edit-icon.svg';
import likeInactive from '../images/like-inactive.svg';
import { initialCards } from './components/cards.js';
import { createCards, deleteCard, likeCard } from './components/card.js';
import { openModal, closeModal, closeModalEsc, closeModalOverlay } from './components/modal.js';

const whoIsTheGoat = [
    // меняем исходные пути на переменные
    { name: 'Иконка добавления', link: addIcon },
    { name: 'Иконка удаления', link: deleteIcon },
    { name: 'Крестик', link: close },
    { name: 'Значок редактирования', link: editIcon },
    { name: 'Активный лайк', link: likeActive },
    { name: 'Не активный лайк', link: likeInactive },
];
// Находим форму в DOM
const popupEdit = document.querySelector('.popup_type_edit');
const profileForm = popupEdit.querySelector('.popup__form');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_type_name');// Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector('.popup__input_type_description');// Воспользуйтесь инструментом .querySelector()

const placeForm = document.querySelector('.popup__form_new-card');
const newCard = document.querySelector('.popup_type_new-card');
const cardImage = document.querySelector('.popup_type_image');

function openModalImages(card) {
    const image = cardImage.querySelector('.popup__image');
    const cardtext = cardImage.querySelector('.popup__caption');
    image.src = card.link;
    image.alt = card.name;
    cardtext.textContent = card.name;
    openModal(cardImage);
}

closeModalEsc();
closeModalOverlay();

const buttonElement = document.querySelector('.profile__edit-button');
buttonElement.addEventListener('click', () => {
    openModal(popupEdit);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
});

const buttonAdd = document.querySelector('.profile__add-button');
buttonAdd.addEventListener('click', () => {
    openModal(newCard);
});

const closeElement = document.querySelector('.popup__close');
closeElement.addEventListener('click', () => {
    closeModal(popupEdit);
});

const closeNewCard = document.querySelector('.popup__close_new_card');
closeNewCard.addEventListener('click', () => {
    closeModal(newCard);
});

const cardImageClose = document.querySelector('.popup__close__image');
cardImageClose.addEventListener('click', () => {
    closeModal(cardImage)
});

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function profileFormSubmit(evt) {
    evt.preventDefault();
    // Получите значение полей jobInput и nameInput из свойства value

    profileName.textContent = nameInput.value;// Выберите элементы, куда должны быть вставлены значения полей
    profileJob.textContent = jobInput.value;// Вставьте новые значения с помощью textContent
    const popup = profileForm.closest('.popup');
    popup.classList.remove('popup_is-opened');
}

function renderCard(cardElement) {
    const placesContainer = document.querySelector('.places__list');
    placesContainer.append(cardElement);
};

initialCards.forEach((card) => {
    renderCard(createCards(card, openModalImages));
});

function addCard(evt) {
    evt.preventDefault();

    const cardTitleInput = document.querySelector('.popup__input_type_card-name');
    const cardLinkInput = document.querySelector('.popup__input_type_url');
    const newCard = { name: cardTitleInput.value, link: cardLinkInput.value };
    const elemensCard = createCards(newCard, openModalImages)
    const popupNewCard = document.querySelector('.popup_type_new-card');
    const placesContainer = document.querySelector('.places__list');

    placesContainer.prepend(elemensCard);
    placeForm.reset();
    closeModal(popupNewCard);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileForm.addEventListener('submit', profileFormSubmit);
placeForm.addEventListener('submit', addCard);