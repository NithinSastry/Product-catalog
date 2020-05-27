import HeaderView from './header-view';
import ListView from './list-view';
class DetailView {
  constructor() {
    this.headerView = new HeaderView();
    this.listView = new ListView();
  }

  getMarkup = () => {
    return `
        <div class="detail-view">
            ${this.headerView.getMarkup()}
            ${this.listView.getMarkUp()}
        </div>
      `;
  };
}

export default DetailView;
