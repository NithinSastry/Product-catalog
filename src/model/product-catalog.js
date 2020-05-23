import EventHub from './../controller/event-hub';
class ProductCatalog {
  constructor(serviceInstance, eventHub) {
    this.products = [];
    this.serviceInstance = serviceInstance;
    this.eventHub = EventHub;
    this.eventHub.subscribe('filterChanged', this.filterModel);
    this.eventHub.subscribe('searchBrand', this.searchModel);
    this.eventHub.subscribe('colorPick', this.searchColors);
    this.init();
  }
  init = () => {
    this.serviceInstance.getProducts().then((data) => {
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
}

export default ProductCatalog;
