const popupElement = document.querySelector('.popup');
const newCard = document.querySelector('.popup_type_new-card');
const cardImage = document.querySelector('.popup_type_image');

export function openModal() {
    const buttonElement = document.querySelector('.profile__edit-button');
    buttonElement.addEventListener('click', () => {
        popupElement.classList.add('popup_is-opened', 'popup_is-animated');
    });
    const buttonAdd = document.querySelector('.profile__add-button');
    buttonAdd.addEventListener('click', () => {
        newCard.classList.add('popup_is-opened', 'popup_is-animated');
    });
}

export function closeModal() {
    const closeElement = popupElement.querySelector('.popup__close');
    closeElement.addEventListener('click', () => {
        popupElement.classList.remove('popup_is-opened');
    });
    const closeNewCard = document.querySelector('.popup__close_new_card');
    closeNewCard.addEventListener('click', () => {
        newCard.classList.remove('popup_is-opened');
    });
    const cardImageClose = document.querySelector('.popup__close__image');
    cardImageClose.addEventListener('click', () => {
        cardImage.classList.remove('popup_is-opened');
    });
}

export function closeModalEsc() {
    document.addEventListener('keydown', (evt) => {
        if (evt.key === "Escape") {
            popupElement.classList.remove('popup_is-opened');
            newCard.classList.remove('popup_is-opened');
            cardImage.classList.remove('popup_is-opened');
        }
    });
}

export function closeModalOverlay() {
    popupElement.addEventListener('click', (evt) => {
        if (evt.currentTarget === evt.target) {
            popupElement.classList.remove('popup_is-opened');
        }
    });
    newCard.addEventListener("click", (evt) => {
        if (evt.currentTarget === evt.target) {
            newCard.classList.remove('popup_is-opened');
        }
    });
    cardImage.addEventListener("click", (evt) => {
        if (evt.currentTarget === evt.target) {
            cardImage.classList.remove('popup_is-opened');
        }
    });
}