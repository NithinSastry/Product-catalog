import RangeFilter from './controls/range-filter';
import SearchFilter from './controls/search-filter';
import ColorPickerFilter from './controls/color-picker-filter';
class FilterView {
  constructor() {
    this.rangeFilter = new RangeFilter();
    this.searchFilter = new SearchFilter();
    this.colorFilter = new ColorPickerFilter();
  }
  getMarkup = () => {
    return `
            <div id="filter">
                <p>Filter markup</p>
                <div>
                    ${this.rangeFilter.getMarkup()}
                    ${this.searchFilter.getMarkup()}
                    ${this.colorFilter.getMarkup()}
                </div>
            </div>
        `;
  };
}

export default FilterView;
