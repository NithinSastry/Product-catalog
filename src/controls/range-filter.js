class RangeFilter {
  constructor() {
    this.minValue = 0;
    this.maxValue = 1000;
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

  getMarkup = () => {
    return `
        <div class="range-filter">
            <select>
                ${this.getOptions()}
                </select>
                <p>to</p>
                <select>
                ${this.getOptions()}
                </select>
        </div>
      `;
  };
}

export default RangeFilter;
