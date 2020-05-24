import { getEventHub } from '../../controller/event-hub';
class RangeFilter {
  constructor() {
    this.minValue = 0;
    this.maxValue = 1000;
    this.eventHub = getEventHub();
    window.setMinimumForRange = this.setMinimum;
    window.setMaximumForRange = this.setMaximum;
  }

  getOptions = () => {
    let options = ``;
    for (let i = 0; i <= 1000; i += 100) {
      options += `
            <option value=${i}>${i}</option>
        `;
    }
    return options;
  };

  setMinimum = (value) => {
    this.minValue = value;
    this.filterList();
  };

  setMaximum = (value) => {
    this.maxValue = value;
    this.filterList();
  };

  filterList = () => {
    this.eventHub.publish('filterChanged', {
      minValue: this.minValue,
      maxValue: this.maxValue,
    });
  };

  getMarkup = () => {
    return `
        <div class="range-filter">
                <select id="minValue" onchange="setMinimumForRange(value)">
                ${this.getOptions()}
                </select>
                <p>to</p>
                <select id="maxValue" onchange="setMaximumForRange(value)">
                ${this.getOptions()}
                </select>
        </div>
      `;
  };
}

export default RangeFilter;
