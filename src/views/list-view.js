import HeaderView from './header-view';
import EventHub from '../controller/event-hub';
import ItemViewMarkup from './item-view';
class ListView {
  constructor() {
    this.headerView = new HeaderView();
    this.eventHub = EventHub;
    this.eventHub.subscribe('listChanged', this.reBuildMarkup);
    this.listDiv = null;
  }
  getInitialMarkup = () => {
    return `
            <div id="list">
                <p>Loading items....</p>
            </div>
        `;
  };

  reBuildMarkup = ({ items }) => {
    const list = this.listDiv ? this.listDiv : document.querySelector('#list');
    let markUp = ``;
    items.forEach((element) => {
      markUp += ItemViewMarkup(element);
    });
    list.innerHTML = markUp;
  };
}

export default ListView;
