//importing models, views, styles
import { getProductCatalog } from './model/product-catalog';
import AppView from './views/app-view';
import './styles/app.styles.css';

//initializing model
getProductCatalog();
//initializing view
const appView = new AppView();
