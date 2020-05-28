import getItem from './item-view';
import { getEventHub } from './../controller/event-hub';
import { EVENTS } from './../controller/events';
export default class ListView {
  constructor() {
    getEventHub().subscribe(EVENTS.CARDS_LOADED, this.reBuildList);
    this.listElement = null;
    this.cards = 0;
  }
  getMarkup = () => {
    return `
            <div class = "list-view">
                <p>Saved cards</p>
                <p class='list-element'>${
                  this.cards === 0 ? 'No saved cards.' : ''
                }</p>
            </div>
        `;
  };
  reBuildList = ({ cards = [] }) => {
    this.cards.length = cards.length;
    const listElement = this.listElement
      ? this.listElement
      : document.querySelector('.list-element');
    const markUp = '';
    if (cards.length === 0) {
      markUp += `No items to load.`;
    } else {
      cards.forEach((card) => {
        markUp += getItem(card);
      });
    }
    listElement.innerHTML = markUp;
  };
}
