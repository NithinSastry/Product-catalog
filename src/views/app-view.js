import FilterView from './filter-view';
import DetailView from './detail-view';
class AppView {
  constructor() {
    this.appDiv = document.querySelector('#app');
    this.filterView = new FilterView();
    this.detailView = new DetailView();
    this.init();
  }
  init = () => {
    this.appDiv.innerHTML = `
            <div id="container">
                ${this.filterView.getMarkup()}
                ${this.detailView.getMarkup()}
            </div>
        `;
  };
}

export default AppView;
