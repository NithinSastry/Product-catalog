import RangeFilter from '../controls/range-filter';
class FilterView {
  constructor() {
    this.rangeFilter = new RangeFilter();
  }
  getMarkup = () => {
    return `
            <div id="filter">
                <p>Filter markup</p>
                <div>
                    ${this.rangeFilter.getMarkup()}
                </div>
            </div>
        `;
  };
}

export default FilterView;
