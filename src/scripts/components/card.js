export function createCards(card, openModalImages) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');

  cardElement.querySelector('.card__image').src = card.link;
  cardElement.querySelector('.card__image').alt = card.alt;
  cardElement.querySelector('.card__title').textContent = card.name;

  deleteButton.addEventListener('click', () => {
    deleteCard(deleteButton);
  });

  likeButton.addEventListener('click', () => {
    likeCard(likeButton);
  });

  cardElement.querySelector('.card__image').addEventListener('click', () => {
    openModalImages(card);
  });

  return cardElement;
}

export function deleteCard(deleteButton) {
  deleteButton.closest('.places__item').remove();
};

export function likeCard(likeButton) {
  likeButton.classList.toggle('card__like-button_is-active');
};