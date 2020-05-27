const ItemViewMarkup = (element) => {
  return `
        <div class="item">
            <img src="${element.image}" alt="${element.title}" class="food-image">
            <p class="food-title">${element.title}</p>
            <div class="item-details">
                <p>${element.rating}</p>
                <p> * </p>
                <p>$ ${element.price}</p>
                <p> * </p>
                <p>${element.color}</p>
            </div>
        </div>   
    `;
};

export default ItemViewMarkup;
