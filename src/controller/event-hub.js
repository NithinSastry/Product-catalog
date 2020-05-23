let instance = null;
class EventHub {
  constructor() {
    if (!instance) {
      this.EventMap = {
        listChanged: [],
        filterChanged: [],
        searchBrand: [],
      };
      instance = this;
    }
    return instance;
  }

  publish = (event, payload) => {
    this.EventMap[event].forEach((subscriber) => {
      subscriber(payload);
    });
  };

  subscribe = (event, callBack) => {
    if (typeof callBack === 'function' && event != undefined) {
      this.EventMap[event].push(callBack);
    }
  };
}

export default new EventHub();
