let instance;
export class EventHub {
  constructor() {
    this.EventMap = {};
  }
  subscribe = (event, callBack) => {
    if (typeof callBack === 'function' && event != undefined) {
      if (this.EventMap[event]) {
        this.EventMap[event].push(callBack);
        return;
      }
      this.EventMap[event] = [];
      this.EventMap[event].push(callBack);
    }
  };
  publish = (event, payload) => {
    if (this.EventMap[event]) {
      this.EventMap[event].forEach((subscriber) => {
        subscriber(payload);
      });
    }
  };
}

export const getEventHub = () => {
  if (instance) {
    return instance;
  } else {
    instance = new EventHub();
    return instance;
  }
};
