import FormView from './form-view';
import ListView from './list-view';
let instance;
class AppView {
  constructor() {
    this.formView = new FormView();
    this.listView = new ListView();
    this.appDiv = document.querySelector('#app');
    this.init();
  }
  init = () => {
    this.appDiv.innerHTML = `
        ${this.formView.getMarkup()}            
        ${this.listView.getMarkup()}            
    `;
  };
}

export const getAppView = () => {
  if (instance) {
    return instance;
  } else {
    instance = new AppView();
    return instance;
  }
};
