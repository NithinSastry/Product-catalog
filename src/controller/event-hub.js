let instance = null;
class EventHub {
  constructor() {
    this.EventMap = {
      listChanged: [],
      filterChanged: [],
      searchBrand: [],
      colorPick: [],
      sortList: [],
    };
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

export const getEventHub = () => {
  if (!instance) {
    const eventHub = new EventHub();
    instance = eventHub;
    return instance;
  }
  return instance;
};
// export default new EventHub();
