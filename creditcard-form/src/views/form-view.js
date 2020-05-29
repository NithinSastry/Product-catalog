import { EVENTS } from '../controller/events';
import { getEventHub } from '../controller/event-hub';
export default class FormView {
  constructor() {
    this.formState = {};
    this.formError = false;
    window.onchangeCardNumber = this.onchangeCardNumber;
    window.onchangeDate = this.onchangeDate;
    window.onchangeCVVNumber = this.onchangeCVVNumber;
    window.onclickSave = this.onclickSave;
  }

  validateCardNumber = () => {
    if (!this.formState['cardNumber']) {
      this.formError = true;
    }
  };

  onchangeCardNumber = (value) => {
    this.formState['cardNumber'] = value;
  };

  onchangeDate = (value) => {
    this.validateCardNumber();
    this.formState['expiryDate'] = value;
  };

  onchangeCVVNumber = (value) => {
    this.validateCardNumber();
    this.formState['cvv'] = value;
  };

  onclickSave = () => {
    this.validateCardNumber();
    if (this.formError) {
      alert('Please correct fields before submitting');
      return;
    }
    getEventHub().publish(EVENTS.CARD_SAVED, { cardInfo: this.formState });
  };

  getMarkup = () => {
    return `
            <div class = "form-view">
            <form>
                <label for="credit-card-number">Credit card number</label><br/>
                <input type="number" name="credit-card-number" placeholder="Enter card number" onkeyup="onchangeCardNumber(value)" required/><br/>
                <label for="expiry-date">Expiry date</label><br/>
                <input type="date" name="expiry-date" placeholder="Enter date" onchange="onchangeDate(value)" /><br/>
                <label for="cvv-number">CVV Number</label><br/>
                <input type="password" name="cvv-number" placeholder="Enter CVV" onkeyup="onchangeCVVNumber(value)" /><br/>
                <button onclick="onclickSave()" type="button">Save</button>
            </form>
            </div>
        `;
  };
}
