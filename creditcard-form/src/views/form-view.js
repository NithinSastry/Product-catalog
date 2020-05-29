import { EVENTS } from '../controller/events';
import { getEventHub } from '../controller/event-hub';
export default class FormView {
  constructor() {
    this.formState = {};
    window.onchangeCardNumber = this.onchangeCardNumber;
    window.onchangeDate = this.onchangeDate;
    window.onchangeCVVNumber = this.onchangeCVVNumber;
    window.onclickSave = this.onclickSave;
  }

  onchangeCardNumber = (value) => {
    this.formState['cardNumber'] = value;
  };

  onchangeDate = (value) => {
    this.formState['expiryDate'] = value;
  };

  onchangeCVVNumber = (value) => {
    this.formState['cvv'] = value;
  };

  onclickSave = () => {
    getEventHub().publish(EVENTS.CARD_SAVED, { cardInfo: this.formState });
  };

  getMarkup = () => {
    return `
            <div class = "form-view">
                <label for="credit-card-number">Credit card number</label><br/>
                <input type="number" name="credit-card-number" placeholder="Enter card number" onkeyup="onchangeCardNumber(value)"/><br/>
                <label for="expiry-date">Expiry date</label><br/>
                <input type="date" name="expiry-date" placeholder="Enter date" onchange="onchangeDate(value)" /><br/>
                <label for="cvv-number">CVV Number</label><br/>
                <input type="password" name="cvv-number" placeholder="Enter CVV" onkeyup="onchangeCVVNumber(value)" /><br/>
                <button onclick="onclickSave()">Save</button>
            </div>
        `;
  };
}
