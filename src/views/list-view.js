import HeaderView from './header-view';
class ListView {
    constructor() {
        this.headerView = new HeaderView();
    }
    getMarkup = () => {
        return `
            <div id="list">
                ${this.headerView.getMarkup()}
                <p>List markup</p>
            </div>
        `;
    }
}

export default ListView;