//interacts with eventhub & service broker
import { getEventHub } from './../controller/event-hub';
import { events } from '../controller/events';
import {
  getEmails,
  addEmail,
  updateEmails,
  removeEmail,
} from './../utils/service-broker';

let instance;
class EmailModel {
  constructor() {
    this.emails = [];
    getEventHub().subscribe(events.ADD_EMAIL, this.addEmail);
    getEventHub().subscribe(events.DELETE_EMAIL, this.deleteEmail);
    getEventHub().subscribe(events.MARK_AS_READ, this.markAsRead);
    getEventHub().subscribe(events.MARK_AS_UNREAD, this.markAsUnRead);
    getEventHub().subscribe(events.SHOW_CONTENT, this.showContent);
    this.init();
  }
  init = () => {
    this.emails = getEmails();
    getEventHub().publish(events.LOAD_EMAIL, this.emails);
  };
  addEmail = (email = {}) => {
    this.emails = addEmail(email);
    getEventHub().publish(events.ADD_EMAI, this.emails);
  };
  deleteEmail = (index) => {
    this.emails = removeEmail(index);
    getEventHub().publish(events.DELETE_EMAIL, this.emails);
  };
  markAsRead = (id) => {
    const index = this.emails.findIndex((email) => {
      return email.id === id;
    });
    this.emails[index].read = true;
    this.emails = updateEmails(this.emails);
    getEventHub().publish(events.MARK_AS_READ, this.emails);
  };
  markAsUnRead = (id) => {
    const index = this.emails.findIndex((email) => {
      return email.id === id;
    });
    this.emails[index].read = false;
    this.emails = updateEmails(this.emails);
    getEventHub().publish(events.MARK_AS_READ, this.emails);
  };
  showContent = (id) => {
    return this.emails[id];
  };
}

export default getEmailModel = () => {
  if (!instance) {
    return new EmailModel();
  }
  return instance;
};
