// class ServiceBroker {
//     constructor() {
//         this.url = "http://localhost:8080/data"
//     }
//     getProducts = () => {
//         return window.fetch(this.url)
//         .then((response) => response.json())
//     }
// }

// const ServiceBroker = (url = 'http://localhost:8080/data') => {};
const url = 'http://localhost:8080/data';

export const getProducts = () => {
  return window.fetch(url).then((response) => response.json());
};
