class ServiceBroker {
    constructor() {
        this.url = "http://localhost:8080/data"
    }
    getProducts = () => {
        return window.fetch(this.url)
        .then((response) => response.json())
    }
}

export default ServiceBroker;
