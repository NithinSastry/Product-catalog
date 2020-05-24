import EventHub from '../controller/event-hub';
class HeaderView {
  constructor() {
    this.eventHub = EventHub;
    this.eventHub.subscribe('listChanged', this.reBuildMarkup);
    this.results = null;
  }

  reBuildMarkup = ({ items }) => {
    const resultsMarkup = this.results
      ? this.results
      : document.querySelector('.header-markup > #results');
    resultsMarkup.innerHTML = `Viewing ${items.length} results.`;
  };

  getMarkup = () => {
    return `
            <div class="header-markup">
                <p id="results"></p>
                <span>Sort by : </span>
                <select id="sortoptions" onchange="">
                    <option value="ascending">Price - Low to high</option>
                    <option value="descending">Price - High to low</option>
                </select>
            </div>
        `;
  };
}

export default HeaderView;
