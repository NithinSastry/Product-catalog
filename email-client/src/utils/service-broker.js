const storage = window.localStorage;

export const getEmails = () => {
  return JSON.parse(storage.getItem('emails'));
};

export const addEmail = (email = {}) => {
  const item = JSON.stringify(email);
  const emails = JSON.parse(storage.getEmails());
  emails.push(item);
  storage.setItem('emails', JSON.stringify(emails));
  return emails;
};

export const updateEmails = (emails = []) => {
  storage.setItem('emails', JSON.stringify(emails));
  return JSON.parse(this.storage.getItem('emails'));
};

export const removeEmail = (id) => {
  emails = this.emails.splice(id, 1);
  storage.setItem('emails', emails);
  return emails;
};
