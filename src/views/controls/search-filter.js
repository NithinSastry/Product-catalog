import { getEventHub } from './../../controller/event-hub';
class SearchFilter {
  constructor() {
    this.eventHub = getEventHub();
    window.searchBrands = this.searchBrands;
  }
  searchBrands = (value) => {
    this.eventHub.publish('searchBrand', { searchText: value });
  };
  getMarkup = () => {
    return `<div id="searchFilter">
        <input type="text" name="Search" placeholder="Enter brand" onkeyup="searchBrands(value)"/>
    </div>`;
  };
}

export default SearchFilter;
