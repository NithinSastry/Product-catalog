import { getEventHub } from '../controller/event-hub';
import { getProducts } from '../utils/service-broker';

let instance = null;
class ProductCatalog {
  constructor() {
    this.products = [];
    this.eventHub = getEventHub();
    this.eventHub.subscribe('filterChanged', this.filterModel);
    this.eventHub.subscribe('searchBrand', this.searchModel);
    this.eventHub.subscribe('colorPick', this.searchColors);
    this.eventHub.subscribe('sortList', this.sortModel);
    this.init();
  }

  init = () => {
    getProducts().then((data) => {
      this.products = data;
      this.eventHub.publish('listChanged', { items: this.products });
    });
  };

  filterModel = ({ minValue = 0, maxValue = 0 }) => {
    const filteredProducts = [];
    this.products.forEach((product) => {
      if (product.price > minValue && product.price < maxValue) {
        filteredProducts.push(product);
      }
    });
    this.eventHub.publish('listChanged', { items: filteredProducts });
  };

  searchModel = ({ searchText = '' }) => {
    if (!searchText) {
      this.eventHub.publish('listChanged', { items: this.products });
      return;
    }
    const searchResults = [];
    this.products.forEach((product) => {
      if (product.title.includes(searchText)) {
        searchResults.push(product);
      }
    });
    this.eventHub.publish('listChanged', { items: searchResults });
  };

  searchColors = ({ selectedColors = [] }) => {
    const filteredProducts = [];
    this.products.forEach((product) => {
      if (selectedColors.includes(product.color)) {
        filteredProducts.push(product);
      }
    });
    this.eventHub.publish('listChanged', { items: filteredProducts });
  };

  sortModel = ({ order }) => {
    if (order === 'asc') {
      this.products.sort(
        (productA, productB) => productA.price - productB.price
      );
    } else {
      this.products.sort(
        (productA, productB) => productB.price - productA.price
      );
    }
    this.eventHub.publish('listChanged', { items: this.products });
  };

  getColors = () => {
    const colors = [];
    this.products.forEach((product) => {
      colors.push(product.color);
    });
    return colors;
  };
}

export const getProductCatalog = () => {
  if (!instance) {
    const productCatalog = new ProductCatalog();
    instance = productCatalog;
    return instance;
  }
  return instance;
};
