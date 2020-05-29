import { getCards, storeCard } from './../utils/service-broker';
import { getEventHub } from './../controller/event-hub';
import { EVENTS } from './../controller/events';
let instance;
class CardModel {
  constructor() {
    this.savedCards = [];
    getEventHub().subscribe(EVENTS.CARD_SAVED, this.saveCard);
    this.init();
  }

  init = () => {
    this.savedCards = getCards();
    getEventHub().publish(EVENTS.CARDS_LOADED, { cards: this.savedCards });
  };

  saveCard = ({ cardInfo = {} }) => {
    this.savedCards = storeCard(cardInfo);
    if (this.savedCards.length > 0) {
      getEventHub().publish(EVENTS.CARDS_LOADED, { cards: this.savedCards });
    }
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
