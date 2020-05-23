import EventHub from './../controller/event-hub';
class ProductCatalog {
  constructor(serviceInstance, eventHub) {
    this.products = [];
    this.serviceInstance = serviceInstance;
    this.eventHub = EventHub;
    this.eventHub.subscribe('filterChanged', this.filterModel);
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
}

export default ProductCatalog;
