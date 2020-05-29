const getItem = (card, index) => {
  return `
        <div class="card-item">
            <div class="card-info">
                ${card.cardNumber}
                ${card.expiryDate}
                ${card.cvv}
            </div>
            <div class="delete-card">
                <button data-id="${index}">delete</button>
            </div>
        </div>
    `;
};

export default getItem;
