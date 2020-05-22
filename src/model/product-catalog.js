import EventHub from './../controller/event-hub';
class ProductCatalog {
    constructor(serviceInstance, eventHub) {
        this.products = [];
        this.serviceInstance = serviceInstance;
        this.eventHub = new EventHub();
        this.init();
    }
    init = () => {
        this.serviceInstance.getProducts().then((data) => {
            this.products = data;
            this.eventHub.publish("listChanged", this.products);
        });
    }
}

export default ProductCatalog;