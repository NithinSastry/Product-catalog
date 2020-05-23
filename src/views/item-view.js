const ItemViewMarkup = (element) => {
  return `
        <div class="item">
            <p>${element.title}</p>
            <p>${element.price}</p>
            <p>${element.rating}</p>
            <p>${element.color}</p>
        </div>   
    `;
};

export default ItemViewMarkup;
