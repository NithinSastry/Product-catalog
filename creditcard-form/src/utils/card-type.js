const VISA = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
const MASTER_CARD = new RegExp(
  '^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$'
);
const AMEX = new RegExp(' ^3[47][0-9]{13}$');
const DINERS_CLUB = new RegExp('^3(?:0[0-5]|[68][0-9])[0-9]{11}$');

const getCardImage = (cardType) => {
  let imageUrl = '';
  switch (cardType) {
    case 'VISA':
      imageUrl = './../assets/VISA.png';
      break;
    case 'MASTER CARD':
      imageUrl = './../assets/mastercard.png';
      break;
    case 'AMEX':
      imageUrl = './../assets/american-express.png';
      break;
    case 'DINERS CLUB':
      imageUrl = './../assets/DC.png';
      break;
    default:
      break;
  }
  return imageUrl;
};

export const getCardType = (cardNumber) => {
  let cardType = '';
  if (VISA.test(cardNumber)) {
    cardType = 'VISA';
  } else if (MASTER_CARD.test(cardNumber)) {
    cardType = 'MASTER_CARD';
  } else if (AMEX.test(cardNumber)) {
    cardType = 'AMEX';
  } else if (DINERS_CLUB.test(cardNumber)) {
    cardType = 'DINERS_CLUB';
  }
  return cardType;
};

export const updateCardType = (cardType, formElement) => {
  let cardTypElement = formElement.querySelector('.card-image');
  if (!cardTypElement) {
    cardTypElement = document.createElement('img');
    cardTypElement.className = 'card-image';
    formElement
      .querySelector('.credit-card-number')
      .insertAdjacentElement('afterend', cardTypElement);
  }
  cardTypElement.setAttribute('src', getCardImage(cardType));
};

const sample = myFunction();
sample();
