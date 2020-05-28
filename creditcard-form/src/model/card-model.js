import { getCards, storeCard } from './../utils/service-broker';
let instance;
class CardModel {
  constructor() {
    this.formState = {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    };
    this.savedCards = [];
    this.init();
  }

  init = () => {
    this.savedCards = getCards();
  };

  saveCard = ({ cardInfo = {} }) => {
    storeCard(cardInfo);
  };
}

export const getCardModel = () => {
  if (instance) {
    return instance;
  } else {
    instance = new CardModel();
    return instance;
  }
};
