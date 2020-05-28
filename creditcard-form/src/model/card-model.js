import { getCards, storeCard } from './../utils/service-broker';
import { getEventHub } from './../controller/event-hub';
import { EVENTS } from './../controller/events';
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
    getEventHub().publish(EVENTS.CARDS_LOADED, { cards: this.savedCards });
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
