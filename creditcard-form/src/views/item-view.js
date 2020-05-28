const getItem = (card) => {
  return `
        <div class="card-item">
            <div class="card-info">
                ${card.cardNumber}
                ${card.expiryDate}
                ${card.cvv}
            </div>
            <div class="delete-card">
                <button>delete</button>
            </div>
        </div>
    `;
};

export default getItem;
