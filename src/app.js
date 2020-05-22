import ServiceBroker from './utils/service-broker';
import ProductCatalog from "./model/product-catalog";
import AppView from './views/app-view';
import './styles/app.styles.css';

//initalizing service broker
const serviceBroker = new ServiceBroker();

//initializing model
const productCatalog = new ProductCatalog(serviceBroker);

//initializing view
const appView = new AppView();