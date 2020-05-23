import EventHub from '../../controller/event-hub';
class ColorPickerFilter {
  constructor() {
    //TODO: Need to remove this and fetch it from model.
    this.color = [
      'purple',
      'Mauv',
      'Green',
      'Aquamarine',
      'Crimson',
      'Pink',
      'Goldenrod',
      'Crimson',
      'Pink',
      'Blue',
    ];
    this.selectedColors = [];
    this.eventHub = EventHub;
    window.setColor = this.setColor;
  }

  setColor = (value) => {
    this.selectedColors.push(value);
    this.eventHub.publish('colorPick', { selectedColors: this.selectedColors });
  };

  getCheckBoxes = () => {
    let markup = ``;
    this.color.forEach((color) => {
      markup += `
            <input type="checkbox" id="${color}" name="${color}" value="${color}" onclick="setColor(value)">
            <label for="${color}"> ${color} </label><br>
        `;
    });
    return markup;
  };

  getMarkup = () => {
    return `
        <div id="colorfilter">
            <p>Select color</p>
            ${this.getCheckBoxes()}
        </div>
      `;
  };
}

export default ColorPickerFilter;
