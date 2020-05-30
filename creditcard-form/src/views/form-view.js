import { EVENTS } from '../controller/events';
import { getEventHub } from '../controller/event-hub';
import { validateError, showError, removeError } from '../utils/error-handler';
import { updateCardType, getCardType } from './../utils/card-type';
export default class FormView {
  constructor() {
    this.formState = {};
    this.formError = false;
    window.onchangeCardNumber = this.onchangeCardNumber;
    window.onchangeDate = this.onchangeDate;
    window.onchangeCVVNumber = this.onchangeCVVNumber;
    window.onclickSave = this.onclickSave;
    window.onFormControlFocusOut = this.onFormControlFocusOut;
  }

  validateCardNumber = () => {
    if (!this.formState['cardNumber']) {
      this.formError = true;
    }
  };

  onchangeCardNumber = (value) => {
    // this needs to be optimised
    this.formElement = this.formElement
      ? this.formElement
      : document.getElementsByTagName('form')[0];
    this.formState['cardNumber'] = value;
    const cardTye = getCardType(value);
    if (cardTye) {
      updateCardType(cardTye, this.formElement);
    }
  };

  onchangeDate = (value) => {
    this.validateCardNumber();
    this.formState['expiryDate'] = value;
  };

  onchangeCVVNumber = (value) => {
    this.validateCardNumber();
    this.formState['cvv'] = value;
  };

  resetForm = () => {
    this.formElement = this.formElement
      ? this.formElement
      : document.getElementsByTagName('form')[0];
    this.formElement.reset();
  };

  onclickSave = () => {
    this.validateCardNumber();
    if (this.formError) {
      // this.resetForm();
      alert('Please correct fields before submitting');
      return;
    }
    getEventHub().publish(EVENTS.CARD_SAVED, { cardInfo: this.formState });
  };

  onFormControlFocusOut = (e) => {
    const error = validateError(e);
    if (error) {
      showError(e, error);
    } else {
      removeError(e);
    }
  };

  getMarkup = () => {
    return `
            <div class="form-view" onfocusout="onFormControlFocusOut(event)">
            <form>
                <label for="credit-card-number">Credit card number</label><br/>
                <input type="number" class="credit-card-number" name="credit-card-number" placeholder="Enter card number" onkeyup="onchangeCardNumber(value)" required/><br/>
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
