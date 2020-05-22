// class ItemView {
//     getMarkup = (element) => {
//         return `
//             <div id="item + ${element.id}">
//                 <p>${element.title}</p>
//                 <p>${element.price}</p>
//                 <p>${element.rating}</p>
//             </div>   
//         `;
//     }
// }

const ItemViewMarkup = (element) => {
    return `
        <div class="item">
            <p>${element.title}</p>
            <p>${element.price}</p>
            <p>${element.rating}</p>
        </div>   
    `;
}

export default ItemViewMarkup;