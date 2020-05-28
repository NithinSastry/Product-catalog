const storage = window.localStorage;
let cardIndex = 0;
const isStorageAvailable = () => {
  try {
    storage.setItem('x', 'x');
    const x = storage.getItem('x');
    storage.removeItem('x');
    return true;
  } catch (e) {
    console.error('Local storage un available ', e);
    return false;
  }
};

export const getCards = () => {
  if (isStorageAvailable() && storage.getItem('cards')) {
    return JSON.parse(storage.getItem('cards'));
  } else {
    console.error('Unable to retrieve cards.');
    return [];
  }
};

export const storeCard = (cardInfo = {}) => {
  const cards = JSON.parse(storage.getItem('cards'));
  cards.push(cardInfo);
  storage.setItem('cards', JSON.stringify(cards));
};
