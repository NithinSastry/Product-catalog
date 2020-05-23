import RangeFilter from './controls/range-filter';
import SearchFilter from './controls/search-filter';
class FilterView {
  constructor() {
    this.rangeFilter = new RangeFilter();
    this.searchFilter = new SearchFilter();
  }
  getMarkup = () => {
    return `
            <div id="filter">
                <p>Filter markup</p>
                <div>
                    ${this.rangeFilter.getMarkup()}
                    ${this.searchFilter.getMarkup()}
                </div>
            </div>
        `;
  };
}

export default FilterView;
