// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardTemplate = document.querySelector('#card-template').content;
const placesContainer = document.querySelector('.places__list');

function createCards(card, deleteCard) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

    cardElement.querySelector('.card__image').src = card.link;
    cardElement.querySelector('.card__image').alt = card.alt;
    cardElement.querySelector('.card__title').textContent = card.name;

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', () => {
        deleteCard(deleteButton);
    });

    return cardElement;
}

function deleteCard(deleteButton) {
    deleteButton.closest('.places__item').remove();
};

function renderCard(cardElement) {
    placesContainer.append(cardElement);
}

initialCards.forEach((card) => {
    renderCard(createCards(card, deleteCard))
});
