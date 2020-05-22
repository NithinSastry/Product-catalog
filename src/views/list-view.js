import HeaderView from './header-view';
import EventHub from '../controller/event-hub';
import ItemViewMarkup from './item-view';
class ListView {
    constructor() {
        this.headerView = new HeaderView();
        this.eventHub = new EventHub();
        this.eventHub.subscribeToList(this.reBuildMarkup);
        this.listDiv = null;
    }
    getInitialMarkup = () => {
        return `
            <div id="list">
                <p>Loading items....</p>
            </div>
        `;
    }

    reBuildMarkup = (data) => {
        const list = this.listDiv ? this.listDiv : document.querySelector("#list");
        let markUp = ``;
        data.forEach((element) => {
            markUp += ItemViewMarkup(element);
        });
        list.innerHTML = markUp;
    }
}

export default ListView;