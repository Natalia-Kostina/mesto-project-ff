export function openModal(popup) {
    popup.classList.add('popup_is-opened', 'popup_is-animated');
    document.addEventListener('keydown', closeModalEsc);
}

export function closeModal(popup) {
    popup.classList.remove('popup_is-opened', 'popup_is-animated');
    document.removeEventListener('keydown', closeModalEsc);
}

export function closeModalEsc(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        closeModal(openedPopup);
    }
}

export function closeModalOverlay() {
    const popupEdit = document.querySelector('.popup_type_edit');
    popupEdit.addEventListener('click', (evt) => {
        if (evt.currentTarget === evt.target) {
            closeModal(popupEdit);
        }
    });
    const newCard = document.querySelector('.popup_type_new-card');
    newCard.addEventListener("click", (evt) => {
        if (evt.currentTarget === evt.target) {
            closeModal(newCard);
        }
    });
    const cardImage = document.querySelector('.popup_type_image');
    cardImage.addEventListener("click", (evt) => {
        if (evt.currentTarget === evt.target) {
            closeModal(cardImage);
        }
    });
}

