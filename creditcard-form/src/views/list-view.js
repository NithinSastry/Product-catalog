import getItem from './item-view';
import { getEventHub } from './../controller/event-hub';
import { EVENTS } from './../controller/events';
export default class ListView {
  constructor() {
    getEventHub().subscribe(EVENTS.CARDS_LOADED, this.reBuildList);
    this.listElements = null;
    this.cards = [];
    window.removeListItem = this.removeListItem;
  }

  removeListItem = (e) => {
    getEventHub().publish(EVENTS.DELETE_CARD, {
      index: e.target.dataset['id'],
    });
  };

  getMarkup = () => {
    return `
            <div class="list-view">
                <p>Saved cards</p>
                <div class='list-elements' onclick="removeListItem(event)">${
                  this.cards.length === 0 ? 'No saved cards.' : ''
                }</div>
            </div>
        `;
  };
  reBuildList = ({ cards = [] }) => {
    let markUp = '';
    this.cards = cards;
    this.listElements = this.listElements
      ? this.listElements
      : document.querySelector('.list-elements');
    if (cards.length === 0) {
      markUp += `No items to load.`;
    } else {
      cards.forEach((card, index) => {
        markUp += getItem(card, index);
      });
    }
    this.listElements.innerHTML = markUp;
  };
}
