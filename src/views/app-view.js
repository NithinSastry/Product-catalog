import FilterView from './filter-view';
import ListView from './list-view';
class AppView {
  constructor() {
    this.appDiv = document.querySelector('#app');
    this.filterView = new FilterView();
    this.listView = new ListView();
    this.init();
  }
  init = () => {
    this.appDiv.innerHTML = `
            <div id="container">
                ${this.filterView.getMarkup()}
                ${this.listView.getMarkUp()}
            </div>
        `;
  };
}

export default AppView;
