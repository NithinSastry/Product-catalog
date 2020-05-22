class ProductCatalog {
    constructor(serviceInstance) {
        this.products = [];
        this.serviceInstance = serviceInstance;
        this.init();
    }
    init = () => {
        this.serviceInstance.getProducts().then((data) => {
            this.products = data;
            console.log(this.products);
        })
    }
}

export default ProductCatalog;