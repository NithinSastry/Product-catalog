import getItem from './item-view';
import { getEventHub } from './../controller/event-hub';
import { EVENTS } from './../controller/events';
export default class ListView {
  constructor() {
    getEventHub().subscribe(EVENTS.CARDS_LOADED, this.reBuildList);
    this.listElement = null;
    this.cards = [];
  }
  getMarkup = () => {
    return `
            <div class = "list-view">
                <p>Saved cards</p>
                <p class='list-element'>${
                  this.cards.length === 0 ? 'No saved cards.' : ''
                }</p>
            </div>
        `;
  };
  reBuildList = ({ cards = [] }) => {
    let markUp = '';
    this.cards.length = cards.length;
    const listElement = this.listElement
      ? this.listElement
      : document.querySelector('.list-element');
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
